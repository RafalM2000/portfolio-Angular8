import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveDrivFormComponent } from './forms/reactive-driv-form/reactive-driv-form.component';
import { TemplateDrivFormComponent } from './forms/template-driv-form/template-driv-form.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { CommunicationComponent } from './communication/communication.component';
import { TableComponent } from './http/table/table.component';
import { HooksComponent } from './lifecyclehooks/hooks/hooks.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { LazyComponent } from './lazy/lazy/lazy.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'communiation',
        component: CommunicationComponent
    },
    {
        path: 'http',
        component: TableComponent
    },
    {
        path: 'hooks',
        component: HooksComponent
    },
    {
        path: 'lazymodule',
        loadChildren: './lazy/lazy.module'
    },
    {
        path: 'lazy',
        component: LazyComponent
    },
    {
        path: 'interceptor',
        component: InterceptorComponent
    },
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    HomeComponent,
    DataBindingComponent,
    DirectivesComponent,
    ReactiveDrivFormComponent,
    TemplateDrivFormComponent,
    FormsComponent,
    PipesComponent,
    CommunicationComponent,
    HooksComponent,
    InterceptorComponent
 ];
