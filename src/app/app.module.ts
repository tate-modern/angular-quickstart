import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

import { ComponentOne } from './components/component-one/component-one.component';
import { ComponentTwo } from './components/component-two/component-two.component';

const appRoutes: Routes = [
  { path: 'component-one', component: ComponentOne },
  { path: 'component-two',      component: ComponentTwo },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      AppComponent,
      ComponentOne,
      ComponentTwo
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
