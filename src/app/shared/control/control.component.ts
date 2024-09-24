import { Component, contentChild, ContentChild, ElementRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement >
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick(){
    console.log('Clicked!');
    console.log(this.control);
  }
  @Input({required:true}) label?: string;

}
