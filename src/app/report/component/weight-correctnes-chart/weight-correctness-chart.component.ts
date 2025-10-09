import {Component, Input} from '@angular/core';
import {ReportItemModel} from "../../model/report.model";
import {ChartConfiguration, TooltipItem} from "chart.js";
import {ProductModel} from "../../../production-line/model/production-line.model";

@Component({
  selector: 'app-weight-correctness-chart',
  templateUrl: './weight-correctness-chart.component.html',
  styleUrls: ['./weight-correctness-chart.component.scss']
})
export class WeightCorrectnessChartComponent {

  private _reportItems : ReportItemModel[] = [];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {data: [], label: 'Poprawna waga'},
      {data: [], label: 'Waga średnia z pomiarów'},
    ]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        // filter is a top-level tooltip option (not inside callbacks)
        filter: (tooltipItem: TooltipItem<'line'>) => {
          return tooltipItem.dataset.label === 'Waga średnia';
        },
        callbacks: {
          label: (tooltipItem: TooltipItem<'line'>) => {
            const index = tooltipItem.dataIndex;
            return `Waga średnia  ${this._reportItems[index].averageWeight} g` ;
          }
        }
      },
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

  @Input() product!: ProductModel;


  @Input()
  set reportItems(items: ReportItemModel[]) {
    this._reportItems = items;
    const labels = items.map(item => item.createdAt.split('T')[1]?.slice(0, 5));
    const weightCorrect = items.map(() => this.product.productCorrectWeight);
    const weightMax = items.map(() => this.product.productMaximumWeight);
    const weightMin = items.map(() => this.product.productMinimumWeight);
    const averageWeight = items.map(item => item.averageWeight);

    this.chartData = {
      labels: labels,
      datasets: [
        {
          data: weightCorrect,
          label: 'Waga poprawna',
          borderColor: 'green',
          backgroundColor: 'green',
          pointBackgroundColor: 'green',
          pointBorderColor: 'white',
          tension: 0.3,
          pointRadius: 0,
          pointHitRadius: 0
        },
        {
          data: weightMax,
          label: 'Waga max.',
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          pointBackgroundColor: 'yellow',
          pointBorderColor: 'white',
          tension: 0.3,
          pointRadius: 0,
          pointHitRadius: 0
        },
        {
          data: weightMin,
          label: 'Waga min.',
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          pointBackgroundColor: 'yellow',
          pointBorderColor: 'white',
          tension: 0.3,
          pointRadius: 0,
          pointHitRadius: 0
        },
        {
          data: averageWeight,
          label: 'Waga średnia',
          borderColor: 'blue',
          backgroundColor: 'blue',
          pointBackgroundColor: 'blue',
          pointBorderColor: 'white',
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 8,
          pointHitRadius: 10
        }
      ]
    };
  }

}
