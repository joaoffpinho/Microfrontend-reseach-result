import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroRoutingModule } from './primeiro-routing.module';
import { PrimeiroComponent } from './primeiro.component';
import 'form-user-jffp';

@NgModule({
  declarations: [
    PrimeiroComponent
  ],
  imports: [
    CommonModule,
    PrimeiroRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimeiroModule { }
