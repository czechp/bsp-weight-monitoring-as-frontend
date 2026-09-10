import {Component, Input} from '@angular/core';

export type MeasurementsSampleModel = {
  createdAt: string;
  sampleStatus: boolean;
};


@Component({
  selector: 'app-measurements-sample-chart',
  templateUrl: './measurements-sample-chart.component.html',
  styleUrls: ['./measurements-sample-chart.component.scss']
})
export class MeasurementsSampleChartComponent {
  @Input({required: true}) measurementSamples!: MeasurementsSampleModel[];
}
