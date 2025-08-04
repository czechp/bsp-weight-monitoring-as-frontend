import {IconName} from "@fortawesome/free-regular-svg-icons";
import {UserRole} from "../../users/model/user-info.model";

export type MenuElement = {
  label: string;
  path: string;
  icon: IconName;
  access: UserRole[];
  absolute?: boolean;
}
