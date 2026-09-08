import { Component } from '@angular/core';
import {
  DateFilterRange
} from "../../component/historical-measurements-date-selector/historical-measurements-date-selector.component";

@Component({
  selector: 'app-historical-measurements-line-page',
  templateUrl: './historical-measurements-line-page.component.html',
  styleUrls: ['./historical-measurements-line-page.component.scss']
})
export class HistoricalMeasurementsLinePageComponent {
  applyFilter(dateRange: DateFilterRange): void {
    console.log('Selected date range:', dateRange);

  }
}
