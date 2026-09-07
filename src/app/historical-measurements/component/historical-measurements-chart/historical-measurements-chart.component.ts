import {Component, Input} from '@angular/core';
import {MeasurementsData} from "../../service/historical-measurements-state.service";
import {ChartConfiguration} from "chart.js";

export type ProductionLineMeasurements = {
  productionLineId: number;
  dosingDeviceMeasurements: DosingDeviceMeasurements[];
};

export type DosingDeviceMeasurements = {
  dosingDeviceNr: number;
  measurements: Measurement[];
};

export type Measurement = {
  value: number;
  correctWeight: number;
  maximumWeight: number;
  minimumWeight: number;
  timestamp: string;
};

@Component({
  selector: 'app-historical-measurements-chart',
  templateUrl: './historical-measurements-chart.component.html',
  styleUrls: ['./historical-measurements-chart.component.scss']
})
export class HistoricalMeasurementsChartComponent {
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  dosingDevices: Array<{id: number, label: string, visible: boolean, color: string}> = [];
  private _selectedDosingDeviceId: number | null = null;
  noDataAvailable = false;

  @Input() set selectedDosingDeviceId(value: number | null) {
    this._selectedDosingDeviceId = value;
    this.dosingDevices.forEach((device) => {
      device.visible = true;
    });
    if (this.cachedData) {
      this.updateChart();
    }
  }

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'nearest',
        filter: (item) => {
          const label = item.dataset.label ?? '';
          return !['Waga referencyjna', 'Waga min.', 'Waga max.'].includes(label);
        },
        callbacks: {
          title: (items) => items[0]?.dataset?.label ?? 'Pomiary',
          label: (context) => {
            const timestamp = context.label ?? '';
            const value = context.parsed.y;
            return `Data: ${timestamp} | Wartość: ${value} g`;
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  // Colors for different dosing devices
  private readonly colorPalette = [
    '#FF5C8A', '#00B8D9', '#7C4DFF', '#F9A826', '#00C853', '#FF6F61',
    '#1E88E5', '#FB8C00', '#26A69A', '#8E24AA', '#43A047', '#D81B60',
    '#3949AB', '#FDD835', '#00897B', '#E53935', '#6D4C41', '#039BE5',
    '#7CB342', '#EF5350', '#5E35B1', '#FFB300', '#00ACC1', '#7E57C2',
    '#C0CA33', '#00A152', '#FB6D00', '#5C6BC0', '#E91E63', '#2E7D32'
  ];

  private getColor(index: number): string {
    return this.colorPalette[index % this.colorPalette.length];
  }

  private formatTimestamp(value: string): string {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}${minutes} ${day}:${month}:${year}`;
  }

  private cachedData: MeasurementsData | null = null;

  @Input() set measurementsData(data: ProductionLineMeasurements | MeasurementsData | null) {
    this.productionLineMeasurements = data;
  }

  @Input() set productionLineMeasurements(data: ProductionLineMeasurements | MeasurementsData | null) {
    const normalizedData = this.toMeasurementsData(data);

    // Always cache the data, even if empty
    this.cachedData = normalizedData;

    if (!normalizedData || !normalizedData.measurements || normalizedData.measurements.length === 0) {
      this.noDataAvailable = true;
      // Clear the chart when no data
      this.chartData = {
        labels: [],
        datasets: []
      };
      return;
    }

    this.noDataAvailable = false;

    // Group measurements by dosing device to build checkbox list
    const dosingDeviceIds = [...new Set(normalizedData.measurements.map(m => m.dosingDeviceId))].sort((a, b) => a - b);

    // Initialize dosing devices list only on first load
    if (this.dosingDevices.length === 0) {
      this.dosingDevices = dosingDeviceIds.map((id, index) => ({
        id: id,
        label: `Lejek ${id}`,
        // Show all dosing devices by default
        visible: true,
        color: this.getColor(index)
      }));
    } else {
      // On subsequent data updates (filtering), preserve checkbox states
      // but update list if new dosing devices appeared
      dosingDeviceIds.forEach((id) => {
        const existingDevice = this.dosingDevices.find(d => d.id === id);
        if (!existingDevice) {
          const index = this.dosingDevices.length;
          this.dosingDevices.push({
            id: id,
            label: `Lejek ${id}`,
            visible: true,
            color: this.getColor(index)
          });
        }
      });
    }

    this.updateChart();
  }

  private toMeasurementsData(data: ProductionLineMeasurements | MeasurementsData | null): MeasurementsData | null {
    if (!data) {
      return null;
    }

    if ('measurements' in data && 'referenceValue' in data) {
      return data;
    }

    if (!('dosingDeviceMeasurements' in data) || !data.dosingDeviceMeasurements || data.dosingDeviceMeasurements.length === 0) {
      return null;
    }

    const measurements = data.dosingDeviceMeasurements.flatMap((device) =>
      device.measurements.map((measurement) => ({
        dosingDeviceId: device.dosingDeviceNr,
        value: measurement.value,
        referenceValue: measurement.correctWeight,
        minValue: measurement.minimumWeight,
        maxValue: measurement.maximumWeight,
        createdAt: measurement.timestamp || new Date().toISOString()
      }))
    );

    const referenceValues = measurements.map(m => m.referenceValue);
    const minValues = measurements.map(m => m.minValue);
    const maxValues = measurements.map(m => m.maxValue);

    return {
      measurements,
      referenceValue: referenceValues[0] ?? 0,
      minValue: minValues.length ? Math.min(...minValues) : 0,
      maxValue: maxValues.length ? Math.max(...maxValues) : 0
    };
  }

  toggleDosingDevice(deviceId: number): void {
    const device = this.dosingDevices.find(d => d.id === deviceId);
    if (device) {
      device.visible = !device.visible;
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.cachedData) {
      return;
    }

    const data = this.cachedData;

    // Group measurements by timestamp to get labels
    const timePoints = [...new Set(data.measurements.map(m => m.createdAt))].sort();
    const labels = timePoints.map(time => this.formatTimestamp(time));

    // Create datasets for each dosing device
    const datasets: ChartConfiguration<'line'>['data']['datasets'] = [];

    this.dosingDevices.forEach((device) => {
      if (!device.visible) {
        return; // Skip hidden devices
      }

      const deviceMeasurements = data.measurements.filter(m => m.dosingDeviceId === device.id);

      // Create data array aligned with time points
      const dataPoints = timePoints.map(time => {
        const measurement = deviceMeasurements.find(m => m.createdAt === time);
        return measurement ? measurement.value : null;
      });

      datasets.push({
        data: dataPoints as number[],
        label: device.label,
        borderColor: device.color,
        backgroundColor: device.color,
        pointBackgroundColor: device.color,
        pointBorderColor: 'white',
        tension: 0.3,
        showLine: true,
        spanGaps: true,
        borderWidth: 2,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointHitRadius: 16
      });
    });

    // Add reference lines
    const referenceValues = timePoints.map(() => data.referenceValue);
    const minValues = timePoints.map(() => data.minValue);
    const maxValues = timePoints.map(() => data.maxValue);

    datasets.push(
      {
        data: referenceValues,
        label: 'Waga referencyjna',
        borderColor: 'green',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'green',
        pointBorderColor: 'white',
        tension: 0,
        fill: false,
        pointRadius: 0,
        pointHitRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5]
      },
      {
        data: minValues,
        label: 'Waga min.',
        borderColor: 'orange',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'orange',
        pointBorderColor: 'white',
        tension: 0,
        fill: false,
        pointRadius: 0,
        pointHitRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5]
      },
      {
        data: maxValues,
        label: 'Waga max.',
        borderColor: 'red',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'red',
        pointBorderColor: 'white',
        tension: 0,
        fill: false,
        pointRadius: 0,
        pointHitRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5]
      }
    );

    this.chartData = {
      labels: labels,
      datasets: datasets
    };
  }
}
