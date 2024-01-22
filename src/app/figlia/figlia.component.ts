import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-figlia',
  templateUrl: './figlia.component.html',
  styleUrl: './figlia.component.css'
})
export class FigliaComponent {
  @Input('datoDiIngresso') contatore : number = 0;
  @Output() eventoGeneratoDallaFiglia = new EventEmitter<number>();

  inviaQualcosa(){
    this.eventoGeneratoDallaFiglia.emit(this.contatore+1*100);
  }

}
