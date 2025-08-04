import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../model/user.model";
import {ElementState} from "../../../shared/directive/element-state.directive";

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
  @Input() user!: UserModel;
  state: ElementState = ElementState.NOK;

  ngOnInit(): void {
    this.state = this.user.adminActivation && this.user.emailConfirmed ? ElementState.OK : ElementState.NOK;
  }
}
