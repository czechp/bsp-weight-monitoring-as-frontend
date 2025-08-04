import {Component, Input} from '@angular/core';
import {ControllerModel} from "../../model/controller.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-controllers-list',
  templateUrl: './controllers-list.component.html',
  styleUrls: ['./controllers-list.component.scss']
})
export class ControllersListComponent {
  @Input() controllers!: ControllerModel[];

  constructor(private router: Router) {
  }
  navigateToDetails(id: number) {
    this.router.navigate(["controller-details", id,  "details"]);
  }
}
