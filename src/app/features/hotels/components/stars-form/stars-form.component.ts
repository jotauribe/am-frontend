import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef
} from '@angular/core';

import { StarCheckboxComponent } from '../star-checkbox/star-checkbox.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stars-form',
  templateUrl: './stars-form.component.html',
  styleUrls: ['./stars-form.component.css']
})
export class StarsFormComponent implements OnInit, AfterViewInit {
  form: FormGroup;

  @Output('starSelected')
  starSelected = new EventEmitter();

  @ViewChildren(StarCheckboxComponent)
  starCkeckboxes: QueryList<StarCheckboxComponent>;

  selectedStars = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      oneStar: [false],
      twoStars: [false],
      threeStars: [false],
      fourStars: [false],
      fiveStars: [false]
    });
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  onChange(event) {
    this.selectedStars = [];
    this.starCkeckboxes.toArray().forEach(sc => {
      if (sc.input.nativeElement.checked) {
        this.selectedStars.push(sc.numberOfStars);
      }
    });
    event.selectedStars = this.selectedStars;
    this.starSelected.emit(event);
  }
}
