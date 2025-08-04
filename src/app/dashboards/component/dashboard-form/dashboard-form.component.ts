import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IconItem} from "../../../shared/type/icon-item.type";
import {DashboardCreateForm} from "../../model/dashboard.form";
import {FormGroup} from "@angular/forms";
import {IconName} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.scss']
})
export class DashboardFormComponent implements OnChanges, OnInit {
  @Input() icons!: IconItem[];
  @Input() dashboardFormGroup!: FormGroup<DashboardCreateForm>;
  selectedIcon!: IconName;
  @Output() submitted = new EventEmitter();

  ngOnInit(): void {
    this.dashboardFormGroup.get('icon')?.valueChanges.subscribe(() => {
      this.updateIcon();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIcon();
  }

  assignIcon(iconItem: IconItem) {
    this.dashboardFormGroup.get("icon")?.setValue(iconItem.icon);
  }

  submitOnClick(){
    this.submitted.emit();
  }
  private updateIcon() {
    if (this.icons.length > 0) {
      const iconValue = this.dashboardFormGroup.get('icon')?.value as IconName;
      this.selectedIcon = this.icons
        .filter(iconItem => iconItem.icon === iconValue)[0].fontAwesomeName as IconName;
    }
  }
}
