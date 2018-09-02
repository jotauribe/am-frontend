import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as fromStore from '../../store';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  form: FormGroup;

  @Output()
  hotelNameSelected = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromStore.HotelsState>
  ) {
    this.form = formBuilder.group({
      hotelName: [null]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.hotelNameSelected.emit({
      selectedHotelName: this.form.controls.hotelName.value
    });
  }
}
