import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainStageComponent } from './main-stage/main-stage.component';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainStageComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
