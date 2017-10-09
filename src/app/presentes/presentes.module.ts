import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { PresentesComponent } from './presentes.component';
import { PresentesService } from './shared/presentes.service';
import { PresenteFormComponent } from './presente-form/presente-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    PresentesComponent,
    PresenteFormComponent
  ],
  exports: [
    PresentesComponent
  ],
  providers: [
    PresentesService
  ]
})
export class PresentesModule { }
