import {Component} from '@angular/core';
import {IconTile} from "../top-bar-tiles/top-bar-tiles.component";
import {AuthenticationService} from "../../../shared/service/authentication.service";

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent {

  visibility = false;
  tile: IconTile = {
    iconName: "user",
    title: "",
    onClick: () => {
    }
  }

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.userInfo$.subscribe(userInfo => {
      if (userInfo) {
        this.tile.title = userInfo.username;
        this.visibility = true;
      } else
        this.visibility = false;
    })
  }

  logout() {
    this.authenticationService.logout();
  }
}
