import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  private colors: string[] = ['red', 'orange', 'lightblue', 'green', 'blue', 'indigo', 'violet','orange'];

  @HostBinding('style.color') textColor: string="";
  @HostBinding('style.border-color') borderColor: string="";

  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }

  private changeColor() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }

}
