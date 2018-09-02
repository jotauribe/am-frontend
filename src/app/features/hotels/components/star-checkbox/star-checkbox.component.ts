import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ViewChild,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-checkbox',
  template: `
    <input #input class="form-check-input"
           type="checkbox"
           id="{{_id}}"
           [checked]="checked">
    <label class="form-check-label"
           for="{{_id}}">
      <span *ngFor="let item of Arr(+numberOfStars).fill(1);" class="yellowStar"></span>
    </label>`,
  styles: [
    `
      .yellowStar {
        padding-left: 20px;
        background-color: #d4b91b;
        mask: url(/assets/icons/filters/star.svg) no-repeat center;
        -webkit-mask: url(/assets/icons/filters/star.svg) no-repeat center;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarCheckboxComponent),
      multi: true
    }
  ]
})
export class StarCheckboxComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input')
  input;

  @HostBinding('class')
  class = 'form-check';

  @Input('numberOfStars')
  numberOfStars: number;

  _id: string;

  checked: Boolean;

  Arr = Array;

  onTouchedCallback: () => {};

  propagateChange = (_: any) => {};

  constructor() {}

  ngOnInit(): void {
    this._id = `${this.numberOfStars}Stars`;
  }

  writeValue(value: any) {
    if (value !== undefined && value !== null) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  onChange(event) {
    this.checked = event.target.checked;
    this.propagateChange(event.target.checked);
  }
}
