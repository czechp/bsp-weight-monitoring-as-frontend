import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production-line-view-selector',
  templateUrl: './production-line-view-selector.component.html',
  styleUrls: ['./production-line-view-selector.component.scss']
})
export class ProductionLineViewSelectorComponent {

  constructor(private router: Router) {
  }

  navigateToTile(){
    this.router.navigate(["production-lines"])
  }

  navigateToList(){
    this.router.navigate(["production-lines-measurements"])

  }
}
