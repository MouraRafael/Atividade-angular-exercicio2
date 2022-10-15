import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './atividade/component/jogo/jogo.component';

const routes: Routes = [
  {path:'atividade/jogo',component:JogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
