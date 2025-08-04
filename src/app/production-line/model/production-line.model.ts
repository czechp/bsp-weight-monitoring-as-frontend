export type ProductModel = {
  productName: string;
  productMinimumWeight: number;
  productMaximumWeight: number;
  productCorrectWeight: number;
  cupHeight: number;
  cupDiameter: number;
  cupWeight: number;
};

export type MeasurementModel = {
  dosingNr: number;
  value: number;
  deviation: number;
};

export type ParaffinConsumptionModel = {
  paraffinRealConsumption: number;
  paraffinExpectedConsumption: number;
  paraffinDeviation: number;
};

export type ProductionLineModel = {
  id: number;
  version: number;
  name: string;
  ipAddress: string;
  product: ProductModel;
  measurements: MeasurementModel[];
  averageMeasurement: number;
  lineActive: boolean;
  productCounter: number;
  paraffinConsumption: ParaffinConsumptionModel;
  communicationError: boolean;
  lastUpdate: string;
};


export type ProductionLineAddModel = {
  name: string;
  ipAddress: string;
}


export type ProductionLineModifyModel = {
  lineId: number;
  name: string;
  ipAddress: string;
}
