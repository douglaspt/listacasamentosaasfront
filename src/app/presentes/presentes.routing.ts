import { Routes, RouterModule } from '@angular/router';

import { PresentesComponent } from './presentes.component';
import {PresenteFormComponent} from "./presente-form/presente-form.component";

const presentesRoutes: Routes = [
  { path: 'presentes', component: PresentesComponent, pathMatch: 'full' },
  { path: 'presentes/new', component: PresenteFormComponent},
  { path: 'presentes/:id', component: PresenteFormComponent}
];

export const presentesRouting = RouterModule.forChild(presentesRoutes);
