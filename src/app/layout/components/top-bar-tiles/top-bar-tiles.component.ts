import {Component} from '@angular/core';
import {IconName} from "@fortawesome/free-regular-svg-icons";
import {Router} from "@angular/router";

export type IconTile = {
  iconName: IconName;
  title: string;
  onClick: () => void;
  route: string[];
}


@Component({
  selector: 'app-top-bar-tiles',
  templateUrl: './top-bar-tiles.component.html',
  styleUrls: ['./top-bar-tiles.component.scss']
})

export class TopBarTilesComponent {
  iconTiles: IconTile[] = [
    {
      iconName: "scale-balanced",
      title: "Moduły wagowe",
      route: ["production-lines"],
      onClick: () => this.router.navigate(["production-lines"])
    },
    {
      iconName: "table",
      title: "Pełne raporty zmianowe",
      route: ["reports", "report-details"],
      onClick: () => this.router.navigate(["reports"])
    },
    {
      iconName: "check-to-slot",
      title: "Raporty BRC",
      route: ["brc", "report-brc-details"],
      onClick: () => this.router.navigate(["brc", {brc: true}])
    },
    {iconName: "bell", title: "Alerty", route: ["alerts"], onClick: () => this.router.navigate(["alerts"])},
    {
      iconName: "gear",
      title: "Ustawienia",
      route: ["settings", "statistics"],
      onClick: () => this.router.navigate(["settings", "statistics"])
    },
  ]

  constructor(private router: Router) {
  }

  isActive(tile: IconTile): boolean {
    if (!tile.route || tile.route.length === 0) return false;
    return tile.route
      .filter(seg => typeof seg === 'string' && seg.length > 0)
      .some(seg => this.router.url.includes('/' + seg));
  }
}
