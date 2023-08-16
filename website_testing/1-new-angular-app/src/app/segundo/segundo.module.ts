import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoRoutingModule } from './segundo-routing.module';
import { SegundoComponent } from './segundo.component';
import 'vue-list-users-jffp'

@NgModule({
  declarations: [
    SegundoComponent
  ],
  imports: [
    CommonModule,
    SegundoRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SegundoModule { }