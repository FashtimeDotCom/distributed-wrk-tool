import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectsComponent} from "./projects.component";
import {ProjectAddDialogComponent} from "./project-add-dialog/project-add-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule
} from "@angular/material";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ProjectsComponent,
      }]),
  ],
  exports: [RouterModule],
  declarations: [
    ProjectsComponent,
    ProjectAddDialogComponent
  ],
  entryComponents: [
    ProjectAddDialogComponent
  ]
})
export class ProjectsModule { }
