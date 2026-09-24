import {Component, Input} from '@angular/core';
import {ChartConfiguration} from "chart.js";
import 'chartjs-adapter-date-fns';

export type ProductionLineStatusModel = {
  createdAt: string;
  working: boolean;
};

const OK_COLOR = 'green';
const NOK_COLOR = 'red';

@Component({
  selector: 'app-production-line-status-chart',
  templateUrl: './production-line-status-chart.component.html',
  styleUrls: ['./production-line-status-chart.component.scss']
})
export class ProductionLineStatusChartComponent {
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  noDataAvailable = true;

  private statuses: ProductionLineStatusModel[] = [];

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          tooltipFormat: 'HH:mm dd.MM.yyyy'
        },
        ticks: {
          callback: (value) => this.formatTimestamp(new Date(value as number).toISOString())
        }
      },
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
          title: (items) => this.formatTimestamp(this.statuses[items[0]?.dataIndex]?.createdAt ?? ''),
          label: (context) => {
            const status = this.statuses[context.dataIndex];
            return `Status: ${status?.working ? 'włączony' : 'wyłączony'}`;
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

  @Input({required: true}) set productionLineStatuses(statuses: ProductionLineStatusModel[]) {
    this.statuses = statuses ?? [];
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
    if (this.statuses.length === 0) {
      this.noDataAvailable = true;
      this.chartData = {labels: [], datasets: []};
      return;
    }

    this.noDataAvailable = false;

    const pointColors = this.statuses.map(status => status.working ? OK_COLOR : NOK_COLOR);
    const data = this.statuses.map(status => ({
      x: new Date(status.createdAt).getTime(),
      y: status.working ? 2 : 0
    }));

    this.chartData = {
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
