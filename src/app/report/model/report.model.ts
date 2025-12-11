import {EfficiencyModel, MeasurementModel, ProductModel} from "../../production-line/model/production-line.model";
import {AlertModel} from "./alerts.model";

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
  I = "I", II = "II", III = "III"
}

export type ReportItemModel = {
  id: number;
  version: number;
  averageWeight: number;
  createdAt: string;
  weightCorrect: boolean;
  weightDeviation: number;
  efficiency: EfficiencyModel;
  measurements: MeasurementModel[];
  alerts: AlertModel[];
  measurementsAverageOfAverages: number;
  averageOfAveragesDeviation: number;
  averageOfAverageLastHour: number
  averageOfAverageLastHourDeviation: number;

}
