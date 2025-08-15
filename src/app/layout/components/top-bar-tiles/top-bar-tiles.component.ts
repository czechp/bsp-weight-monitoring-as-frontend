import {Component} from '@angular/core';
import {IconName} from "@fortawesome/free-regular-svg-icons";
import {Router} from "@angular/router";

export type IconTile = {
  iconName: IconName;
  title: string;
  onClick: () => void;
}


@Component({
  selector: 'app-top-bar-tiles',
  templateUrl: './top-bar-tiles.component.html',
  styleUrls: ['./top-bar-tiles.component.scss']
})

export class TopBarTilesComponent {
  iconTiles: IconTile[] = [
    {iconName: "scale-balanced", title: "Moduły wagowe", onClick: () => this.router.navigate(["production-lines"])},
    {iconName: "table", title: "Raporty BRC", onClick: () => this.router.navigate(["reports"])},
    {iconName: "bell", title: "Alerty", onClick: () => this.router.navigate(["alerts"])},
    {iconName: "gear", title: "Ustawienia", onClick: () => this.router.navigate(["settings", "statistics"])},

  ]

  constructor(private router: Router) {
  }
}
