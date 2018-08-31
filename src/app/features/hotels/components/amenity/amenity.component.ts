import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  Input,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "hotel-amenity",
  template: "<span></span>",
  styleUrls: ["./amenity.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AmenityComponent implements OnInit {
  @Input("type")
  set type(iconType: string) {
    this.setIcon(iconType);
  }

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit() {}

  setIcon(iconType: string) {
    this.renderer.addClass(this.hostElement.nativeElement, `amt-${iconType}`);
  }
}
