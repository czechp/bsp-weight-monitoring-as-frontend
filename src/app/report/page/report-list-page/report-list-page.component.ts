import {Component, OnInit} from '@angular/core';
import {ReportListStateService} from "../../service/report-list-state.service";
import {FormControl, FormGroup} from "@angular/forms";

type FtsForm = {
  phrase: FormControl<string | null>
}


function getFtsForm(): FormGroup<FtsForm> {
  return new FormGroup({
    phrase: new FormControl<string | null>(null)
  });
}

@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.scss'],
  providers: [ReportListStateService]
})
export class ReportListPageComponent  implements OnInit {
  filterForm = this.stateService.filterForm;
  reports$ = this.stateService.reports$;
  ftsForm = getFtsForm();

  ngOnInit(): void {
    this.ftsForm.valueChanges.subscribe(value => {
      this.stateService.filterReport(value.phrase as string);
    });
  }


  constructor(private stateService: ReportListStateService) {
  }

  applyFilter() {
    this.stateService.getReports();
  }

  navigateToDetails(reportId: number) {
    this.stateService.navigateToDetails(reportId);
  }
}
