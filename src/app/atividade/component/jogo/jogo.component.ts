import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JogoModel } from '../model/jogo.model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  baseAleatoria: number = this.geraAleatorio();

  formAdvinha!:FormGroup;

  resultado!: string;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.formAdvinha = this.formBuilder.group({
      entrada: ['',[Validators.required,Validators.pattern(/^[0-9]?[0-9]$|^100$/)]],
    })
  }

  geraAleatorio():number{
      return Math.floor(Math.random()*100) + 1;
  }

  comparaNumeros(){
    const calcula = this.formAdvinha.getRawValue() as JogoModel;

    this.resultado = (this.baseAleatoria == calcula.entrada) ? 'Você Acertou! Parabéns':'Você Errou! Tente Novamente!'


  }

  get entrada() {return this.formAdvinha.get('entrada')!}

}
