import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MyInputService } from './my-input.service';

@Component({
  selector: 'my-input[key]',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

  @Input() key: string;
  @Input() type: 'password' | 'text' = 'text';
  @Input() color: string;
  @Input() placeholder: string = '';

  visibilityActvate: boolean = true;

  @ViewChild('label', { static: true }) label: ElementRef<HTMLLabelElement>;
  constructor(
    private service: MyInputService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if (this.type == 'password')
      this.visibilityActvate = false;

    this.service.addKey(this.key);
  }

  onClick() {
    this.visibilityActvate = !this.visibilityActvate;
  }

  onKeyUp(event: KeyboardEvent) {
    this.service.setValue(this.key, (event.target as HTMLInputElement).value);
  }

  onFocus() {
    this.renderer.setStyle(
      this.label.nativeElement, 'transform', `translateY(-80%)`
    )
  }

  offFocus() {
    if (this.service.getValue(this.key) == '')
    this.renderer.setStyle(
      this.label.nativeElement, 'transform', `translateY(0)`
    )
  }

  get() { return this.service.getValue(this.key); }
}
