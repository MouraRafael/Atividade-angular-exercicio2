import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  baseAleatoria: number = this.geraAleatorio();
  constructor() { }

  ngOnInit(): void {
  }

  geraAleatorio():number{
      return Math.floor(Math.random()*100) + 1;
  }



}
