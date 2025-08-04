import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserRole} from "../../users/model/user-info.model";
import {AuthenticationService} from "../service/authentication.service";

@Directive({
  selector: '[appRoleAccess]'
})
export class RoleAccessDirective implements OnInit {
  @Input('appRoleAccess') roles!: UserRole[];

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const currentRole: UserRole = this.authenticationService.getRole();
    if (this.roles.includes(currentRole))
      this.generateComponent();
  }

  private generateComponent() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
