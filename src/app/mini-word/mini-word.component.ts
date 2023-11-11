import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css'
})
export class MiniWordComponent {
  color="black"
  size="30px"
  font="Roboto"

  changeSize(sizeInput:HTMLInputElement){
    this.size=sizeInput.value+'px'
  }

}
