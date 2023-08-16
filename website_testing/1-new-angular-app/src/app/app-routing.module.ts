import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'primeiro', loadChildren: () => import('./primeiro/primeiro.module').then(m => m.PrimeiroModule) }, 
  { path: 'segundo', loadChildren: () => import('./segundo/segundo.module').then(m => m.SegundoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
