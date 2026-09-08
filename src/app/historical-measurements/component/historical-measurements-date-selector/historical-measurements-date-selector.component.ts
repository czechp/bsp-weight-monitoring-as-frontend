import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export type DateFilterRange = {
  from: string;
  to: string;
};

@Component({
  selector: 'app-historical-measurements-date-selector',
  templateUrl: './historical-measurements-date-selector.component.html',
  styleUrls: ['./historical-measurements-date-selector.component.scss']
})
export class HistoricalMeasurementsDateSelectorComponent implements OnInit, OnChanges {
  @Input()
  initialDateRange?: DateFilterRange;

  @Output()
  dateRangeChanged = new EventEmitter<DateFilterRange>();

  public readonly fromTimeOptions = Array.from({length: 24}, (_, hour) => this.formatTime(hour, 0));
  public readonly toTimeOptions = [...Array.from({length: 24}, (_, hour) => this.formatTime(hour, 0)), '23:59'];

  public readonly dateSelectorForm = new FormGroup({
    fromDate: new FormControl('', { nonNullable: true }),
    fromTime: new FormControl('00:00', { nonNullable: true }),
    toDate: new FormControl('', { nonNullable: true }),
    toTime: new FormControl('00:00', { nonNullable: true })
  });

  ngOnInit(): void {
    this.setCurrentDefaultRange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['initialDateRange']) {
      return;
    }

    if (this.initialDateRange) {
      this.applyInitialDateRange();
      return;
    }

    this.setCurrentDefaultRange();
  }

  public confirmSelection(): void {
    const value = this.dateSelectorForm.getRawValue();
    const selectedRange: DateFilterRange = {
      from: this.buildDateTimeString(value.fromDate, value.fromTime, 0, 0),
      to: this.buildDateTimeString(value.toDate, value.toTime, 0, 0)
    };

    this.dateRangeChanged.emit(selectedRange);
  }

  public onFromTimeChange(value: string): void {
    this.dateSelectorForm.get('fromTime')?.setValue(value);
  }

  public onToTimeChange(value: string): void {
    this.dateSelectorForm.get('toTime')?.setValue(value);
  }

  private applyInitialDateRange(): void {
    const now = new Date();
    const initialFrom = this.parseDateTimeValue(this.initialDateRange?.from, new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
    const initialTo = this.parseDateTimeValue(this.initialDateRange?.to, now);

    this.dateSelectorForm.patchValue({
      fromDate: this.toDateInputValue(initialFrom.date),
      fromTime: this.toSelectableTime(initialFrom.date, 'from'),
      toDate: this.toDateInputValue(initialTo.date),
      toTime: this.toSelectableTime(initialTo.date, 'to')
    });
  }

  private setCurrentDefaultRange(): void {
    const now = new Date();

    this.dateSelectorForm.patchValue({
      fromDate: this.toDateInputValue(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)),
      fromTime: '00:00',
      toDate: this.toDateInputValue(now),
      toTime: this.getCurrentHourTime(now)
    });
  }

  private parseDateTimeValue(value: string | undefined, fallback: Date): { date: Date; microseconds: number } {
    if (!value) {
      return {
        date: fallback,
        microseconds: fallback.getMilliseconds() * 1000
      };
    }

    const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,6}))?$/);

    if (isoMatch) {
      const [, year, month, day, hour, minute, second, fraction = ''] = isoMatch;
      const milliseconds = Number((fraction + '000').slice(0, 3));
      const parsedDate = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute),
        Number(second),
        milliseconds
      );

      return {
        date: parsedDate,
        microseconds: Number((fraction + '000000').slice(0, 6))
      };
    }

    const parsed = new Date(value);

    if (Number.isNaN(parsed.getTime())) {
      return {
        date: fallback,
        microseconds: fallback.getMilliseconds() * 1000
      };
    }

    return {
      date: parsed,
      microseconds: parsed.getMilliseconds() * 1000
    };
  }

  private toDateInputValue(date: Date): string {
    return [
      date.getFullYear(),
      this.padValue(date.getMonth() + 1),
      this.padValue(date.getDate())
    ].join('-');
  }

  private toSelectableTime(date: Date, mode: 'from' | 'to'): string {
    const hour = date.getHours();
    if (mode === 'from') {
      return this.formatTime(hour, 0);
    }

    return this.getRoundedUpHourTime(date);
  }

  private getCurrentHourTime(date: Date): string {
    return this.getRoundedUpHourTime(date);
  }

  private getRoundedUpHourTime(date: Date): string {
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const nextHour = minutes > 0 ? (hour + 1) % 24 : hour;

    return this.formatTime(nextHour, 0);
  }

  private buildDateTimeString(date: string, time: string, second: number, microseconds: number): string {
    if (!date || !time) {
      return '';
    }

    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = time.split(':').map(Number);
    const paddedMicroseconds = this.padValue(microseconds, 6);

    return `${this.padValue(year, 4)}-${this.padValue(month)}-${this.padValue(day)}T${this.padValue(hour)}:${this.padValue(minute)}:${this.padValue(second)}.${paddedMicroseconds}`;
  }

  private formatTime(hour: number, minute: number): string {
    return `${this.padValue(hour)}:${this.padValue(minute)}`;
  }

  private padValue(value: number, targetLength = 2): string {
    return String(value).padStart(targetLength, '0');
  }
}
