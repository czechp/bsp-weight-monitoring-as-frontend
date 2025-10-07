import {Component, Input} from '@angular/core';
import {Measurements} from "../../service/historical-measurements-state.service";
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-historical-measurements-chart',
  templateUrl: './historical-measurements-chart.component.html',
  styleUrls: ['./historical-measurements-chart.component.scss']
})
export class HistoricalMeasurementsChartComponent {
  labels: string[] = [];
  values: number[] = [];
  minValue: number[] = [];
  maxValue: number[] = [];

  referenceValue: number[] = [];
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {data: [], label: 'Poprawna waga'},
    ]
  };
  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // hide point markers globally so lines appear continuous
    // elements: {
    //   point: {
    //     radius: 0
    //   }
    // }
  };

  @Input() set measurements(items: Measurements[]) {
    this.labels = items.map(item => item.createdAt.split('T')[1]?.slice(0, 5));
    this.values = items.map(item => item.value);
    this.referenceValue = items.map(item => item.referenceValue);
    this.minValue = items.map(item => item.minValue);
    this.maxValue = items.map(item => item.maxValue);
    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.values,
          label: "Pomiar",
          borderColor: 'blue',
          backgroundColor: 'blue',
          pointBackgroundColor: 'blue',
          pointBorderColor: 'white',
          tension: 0.3
        },
        {
          data: this.referenceValue,
          label: 'Waga referencyjna',
          borderColor: 'green',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'green',
          pointBorderColor: 'white',
          tension: 0.3,
          fill: false,
          pointRadius: 0
        },
        {
          data: this.minValue,
          label: 'Waga min.',
          borderColor: 'yellow',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'yellow',
          pointBorderColor: 'white',
          tension: 0.3,
          fill: false,
          pointRadius: 0
        },
        {
          data: this.maxValue,
          label: 'Waga min.',
          borderColor: 'yellow',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'yellow',
          pointBorderColor: 'white',
          tension: 0.3,
          fill: false,
          pointRadius: 0
        },
      ]
    }
  };
}
