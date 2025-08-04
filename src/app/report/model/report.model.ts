import {ProductModel} from "../../production-line/model/production-line.model";

export type ReportModel = {
  id: number;
  version: number;
  product: ProductModel;
  reportOpen: boolean;
  lineName: string;
  startAt: string;
  closedAt?: string;
  reportShift: ReportShiftModel;
  reportItems: ReportItemModel[];
}

export enum ReportShiftModel {
  I, II, III
}

export type ReportItemModel = {
  id: number;
  version: number;
  averageWeight: number;
  createdAt: string;
  weightCorrect: boolean;
  weightDeviation: number;
}
