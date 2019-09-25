import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainStageComponent } from './main-stage/main-stage.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { WarningAlertDirective } from './directives/worningAlert/warning-alert.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainStageComponent,
    DataBindingComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    WarningAlertDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
