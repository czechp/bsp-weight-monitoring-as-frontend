import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconTile} from "../top-bar-tiles/top-bar-tiles.component";

@Component({
  selector: 'app-top-bar-tile',
  templateUrl: './top-bar-tile.component.html',
  styleUrls: ['./top-bar-tile.component.scss']
})
export class TopBarTileComponent {
  @Input()
  tile!: IconTile;
  @Input()
  isActive = false;
  @Output()
  clicked = new EventEmitter<IconTile>();


  onClick() {
    this.tile.onClick();
  }
}
