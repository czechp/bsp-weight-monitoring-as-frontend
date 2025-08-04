import {UserRole} from "./user-info.model";

export type UserModel = {
  id: number
  username: string,
  email: string,
  role: UserRole,
  emailConfirmed: boolean,
  adminActivation: boolean,
}
