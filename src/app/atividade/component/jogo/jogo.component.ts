import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  baseAleaatoria: number = this.geraAleatorio();
  constructor() { }

  ngOnInit(): void {
  }

  geraAleatorio():number{
      var aleatorio = Math.floor(Math.random()*100);

      return (aleatorio == 0) ?  this.geraAleatorio() : aleatorio;

  }

}
