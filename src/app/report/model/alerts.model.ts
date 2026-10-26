import {ProductModel} from "../../production-line/model/production-line.model";

export type AlertModel = {
  id: number;
  version: number;
  lineName: string;
  alertType: AlertType;
  createdAt: Date;
  assigned: boolean;
  productUtilizationWay: ProductUtilizationWay;
  deviation: number;
  dosingDevice: number;
  measurementValue: number;
  deviationPercent: number;
  product: ProductModel;
};

export enum AlertType { NORMAL = 'NORMAL', CRITICAL = 'CRITICAL' }

export enum ProductUtilizationWay {
  UNDEFINED='UNDEFINED', PRODUCT_SEPARATED='PRODUCT_SEPARATED'
}
