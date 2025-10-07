import {MeasurementModel, ProductModel} from "../../production-line/model/production-line.model";

export type HistoricalMeasurementModel = {
  productionLineName: string;
  measurements: MeasurementModel[];
  createdAt: string;
  product: ProductModel;
}
