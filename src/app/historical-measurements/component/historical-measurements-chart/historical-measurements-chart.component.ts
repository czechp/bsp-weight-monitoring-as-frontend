import {Component, Input} from '@angular/core';
import {MeasurementsData} from "../../service/historical-measurements-state.service";
import {ChartConfiguration, TooltipItem} from "chart.js";

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

  @Input() set selectedDosingDeviceId(value: number | null) {
    this._selectedDosingDeviceId = value;
  }

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        filter: (tooltipItem: TooltipItem<'line'>) => {
          return tooltipItem.dataset.label?.startsWith('Lejek') ?? false;
        },
        callbacks: {
          label: (tooltipItem: TooltipItem<'line'>) => {
            const value = tooltipItem.parsed.y;
            return `${tooltipItem.dataset.label}: ${value} g`;
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      intersect: true
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };

  // Colors for different dosing devices
  private colors = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
    '#FF6384', '#C9CBCF', '#4BC0C0', '#FF6384', '#36A2EB', '#FFCE56'
  ];

  private cachedData: MeasurementsData | null = null;

  @Input() set measurementsData(data: MeasurementsData) {
    if (!data || !data.measurements || data.measurements.length === 0) {
      return;
    }

    this.cachedData = data;

    // Group measurements by dosing device to build checkbox list
    const dosingDeviceIds = [...new Set(data.measurements.map(m => m.dosingDeviceId))].sort((a, b) => a - b);

    // Initialize or update dosing devices list
    if (this.dosingDevices.length === 0) {
      this.dosingDevices = dosingDeviceIds.map((id, index) => ({
        id: id,
        label: `Lejek ${id}`,
        // If selectedDosingDeviceId is provided, only show that device, otherwise show all
        visible: this._selectedDosingDeviceId !== null ? id === this._selectedDosingDeviceId : true,
        color: this.colors[index % this.colors.length]
      }));
    }

    this.updateChart();
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
    const labels = timePoints.map(time => time.split('T')[1]?.slice(0, 5) || '');

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
        borderWidth: 2,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointHitRadius: 10
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
