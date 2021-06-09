import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule
  ]
})
export class PublicModule { }
