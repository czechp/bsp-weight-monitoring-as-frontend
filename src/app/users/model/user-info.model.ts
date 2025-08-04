export type UserInfo = {
  username: string;
  role: UserRole;
  email: string;
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MAINTAINER = 'MAINTAINER',
}

export function getAllRoles(): UserRole[] {
  return Object.values(UserRole);
}
