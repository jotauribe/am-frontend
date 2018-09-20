import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-input',
  templateUrl: './am-input.component.html',
  styleUrls: ['./am-input.component.css'],
  host: {
    // Native input properties that are overwritten by Angular inputs need to be synced with
    // the native input element. Otherwise property bindings for those don't work.
    '[attr.id]': 'id',
    '[attr.placeholder]': 'placeholder'
  }
})
export class AmInputComponent implements OnInit {
  @Input()
  placeholder = '';

  constructor() {}

  ngOnInit() {}
}
