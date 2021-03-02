import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectDetailsComponent} from './project-details/project-details.component';

const routes: Routes = [
  {path: ':id', component: ProjectDetailsComponent},
  {path: '', redirectTo:'1'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
