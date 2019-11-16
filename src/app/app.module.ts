import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainStageComponent } from './main-stage/main-stage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WarningAlertDirective } from './directives/worningAlert/warning-alert.directive';
import { QuotationPipe } from './quotation.pipe';
import { ReactiveDrivFormTwoComponent } from './forms/reactive-driv-form-two/reactive-driv-form-two.component';
import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { Child2Component } from './communication/child2/child2.component';
import { Parent2Component } from './communication/parent2/parent2.component';
import { Child3Component } from './communication/child3/child3.component';
import { Child4Component } from './communication/child4/child4.component';

import { InteractionService } from './interaction.service';
import { Interaction2Service } from './interaction2.service';
import { Child5Component } from './communication/child5/child5.component';
import { Child6Component } from './communication/child6/child6.component';
import { TableComponent } from './http/table/table.component';
import { Child7Component } from './communication/child7/child7.component';
import { Parent3Component } from './communication/parent3/parent3.component';
import { Child8Component } from './lifecyclehooks/child/child8.component';
import { ParenthooksComponent } from './lifecyclehooks/parent/parent4.component';
import { InterceptorComponent } from './interceptor/interceptor.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { InterceptorsHttpService } from './interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainStageComponent,
    HeaderComponent,
    FooterComponent,
    WarningAlertDirective,
    routingComponents,
    QuotationPipe,
    ReactiveDrivFormTwoComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,
    Parent2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
    TableComponent,
    Child7Component,
    Parent3Component,
     Child8Component,
    ParenthooksComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ InteractionService, Interaction2Service, InterceptorsHttpService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
