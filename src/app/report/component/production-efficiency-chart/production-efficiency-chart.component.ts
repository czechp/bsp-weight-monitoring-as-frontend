import {Component, Input} from '@angular/core';
import {ChartConfiguration} from "chart.js";
import {ReportItemModel} from "../../model/report.model";

@Component({
  selector: 'app-production-efficiency-chart',
  templateUrl: './production-efficiency-chart.component.html',
  styleUrls: ['./production-efficiency-chart.component.scss']
})
export class ProductionEfficiencyChartComponent {
  private _reportItems : ReportItemModel[] = [];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {data: [], label: 'Odchylenie od oczekiwanej produkcji'},
    ]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            return `Produkcja oczekiwana / rzeczywista : ${this._reportItems[index].efficiency.expectedProduction} szt.  || ${this._reportItems[index].efficiency.productCounter} szt.
            Odchyłka od oczekiwanej produkcji %: ${this._reportItems[index].efficiency.expectedProductionPercent - this._reportItems[index].efficiency.productionProgressPercent} %
            `;
          }
        }
      },
    }
  };

  @Input()
  set reportItems(items: ReportItemModel[]) {
    this._reportItems = items;
    const labels = items.map(item => item.createdAt.split('T')[1]?.slice(0, 5));
    const expectedProductionDeviation = items.map(item => item.efficiency.expectedProductionPercent - item.efficiency.productionProgressPercent);

    this.chartData = {
      labels: labels,
      datasets: [
        {
          data: expectedProductionDeviation,
          label: 'Odchylenie od oczekiwanej produkcji',
          borderColor: 'green',
          backgroundColor: 'green',
          pointBackgroundColor: 'green',
          pointBorderColor: 'white',
          tension: 0.3 // opcjonalnie, zaokrąglenie linii
        },

      ]
    };
  }

}
