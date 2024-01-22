import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gennaio22';
  condizione: boolean = true;
  contatore: number = 0;
  titolo: string = "";
  elenco:string[]=
    ['lunedì','martedì','mercoledì','giovedì','venerdì','sabato','domenica'];

  onClick(){
    this.contatore++;
    this.elenco.push('giorno '+this.contatore);
    this.titolo="titolo di prova "+this.contatore;
  }

  onDelete(index:number){
    this.elenco.splice(index,1)
  }

  gestoreEvento(evento:number){
    console.log(evento);
  }
}
