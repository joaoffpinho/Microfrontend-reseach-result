import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundoComponent } from './segundo.component';

const routes: Routes = [{ path: '', component: SegundoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegundoRoutingModule { }
