import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input('name')
  name: string;

  @Input('numberOfStars')
  numberOfStars: number;

  @Input('amenities')
  amenities: string[];

  @Input('price')
  price: number;

  _image: string;

  @Input('image')
  set image(src: string) {
    this._image = `/assets/images/hotels/${src}`;
  }

  @HostBinding('class')
  class = 'card';

  Arr = Array;

  constructor() {}

  ngOnInit() {}
}
