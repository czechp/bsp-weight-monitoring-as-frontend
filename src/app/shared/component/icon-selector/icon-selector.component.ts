import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IconItem} from "../../type/icon-item.type";

@Component({
  selector: 'app-icon-selector',
  templateUrl: './icon-selector.component.html',
  styleUrls: ['./icon-selector.component.scss']
})
export class IconSelectorComponent {
  @Input() icons!: IconItem[];
  @Output() iconChange = new EventEmitter<IconItem>();

  selectIcon(icon: IconItem): void {
    this.iconChange.emit(icon);
  }
}
