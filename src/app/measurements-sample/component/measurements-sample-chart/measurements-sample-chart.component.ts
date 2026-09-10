import {Component, Input} from '@angular/core';
import {ChartConfiguration} from "chart.js";

export type MeasurementsSampleModel = {
  createdAt: string;
  sampleStatus: boolean;
};

const OK_COLOR = 'green';
const NOK_COLOR = 'red';

@Component({
  selector: 'app-measurements-sample-chart',
  templateUrl: './measurements-sample-chart.component.html',
  styleUrls: ['./measurements-sample-chart.component.scss']
})
export class MeasurementsSampleChartComponent {
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  noDataAvailable = true;

  private samples: MeasurementsSampleModel[] = [];

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        min: -0.5,
        max: 2.5
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        intersect: false,
        mode: 'nearest',
        callbacks: {
          title: (items) => items[0]?.label ?? '',
          label: (context) => {
            const sample = this.samples[context.dataIndex];
            return `Status: ${sample?.sampleStatus ? 'OK' : 'NOK'}`;
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  @Input({required: true}) set measurementSamples(samples: MeasurementsSampleModel[]) {
    this.samples = samples ?? [];
    this.updateChart();
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

    return `${hours}:${minutes} ${day}.${month}.${year}`;
  }

  private updateChart(): void {
    if (this.samples.length === 0) {
      this.noDataAvailable = true;
      this.chartData = {labels: [], datasets: []};
      return;
    }

    this.noDataAvailable = false;

    const labels = this.samples.map(sample => this.formatTimestamp(sample.createdAt));
    const pointColors = this.samples.map(sample => sample.sampleStatus ? OK_COLOR : NOK_COLOR);
    const data = this.samples.map(sample => sample.sampleStatus ? 2 : 0);

    this.chartData = {
      labels,
      datasets: [
        {
          data,
          label: '',
          showLine: true,
          stepped: true,
          pointBackgroundColor: pointColors,
          pointBorderColor: pointColors,
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointHitRadius: 10,
          borderColor: '#999',
          borderWidth: 2,
          fill: false,
          tension: 0
        }
      ]
    };
  }
}
