import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Component} from "@angular/core";
import {BACKEND_URL} from "../../../shared/configuration/URL";

export type ProductionLineSimpleModel = {
  id: number;
  name: string;
}

interface OnInit {
}

@Component({
  selector: 'app-historical-measurements-line-page',
  templateUrl: './historical-measurements-line-page.component.html',
  styleUrls: ['./historical-measurements-line-page.component.scss']
})
export class HistoricalMeasurementsLinePageComponent implements OnInit {
  productionLines$ = new BehaviorSubject<ProductionLineSimpleModel[] | null>(null);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProductionLines();
  }

  private getProductionLines() {
    this.http.get<ProductionLineSimpleModel[]>(`${BACKEND_URL}/production-lines/simple`).subscribe((data) => {
      this.productionLines$.next(data);
    });
  }
}
