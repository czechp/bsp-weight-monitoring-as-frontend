import {Component, Input} from '@angular/core';
import {MenuElement} from "../../type/item-element.type";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-with-menu',
  templateUrl: './page-with-menu.component.html',
  styleUrls: ['./page-with-menu.component.scss']
})
export class PageWithMenuComponent {
  @Input({required: true})
  menuElements: MenuElement[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  navigateTo(menuElement: MenuElement) {
    this.router.navigate([menuElement.path], menuElement.absolute ? {} : {relativeTo: this.route});
  }
}
