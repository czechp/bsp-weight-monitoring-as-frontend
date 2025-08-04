import {IconItem} from "../../shared/type/icon-item.type";
import {Unit} from "../../shared/type/unit";
import {State} from "../../shared/type/state";

export type DashboardModel = {
  id: number;
  name: string;
  icon: IconItem;
  groups: DashboardGroupModel[];
}

export type DashboardGroupModel = {
  name: string
  items: DashboardItemModel[];
}

export type DashboardItemModel = {
  name: string;
  value: string;
  unit: Unit;
  state: State;
}

export type DashboardCreateModel = {
  title: string;
  icon: string;
}

export type DashboardRemoveModel = {
  id: number;
}
