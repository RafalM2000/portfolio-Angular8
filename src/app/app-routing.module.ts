import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';     // Add your component here
import { DirectivesComponent } from './directives/directives.component';  // Add your component here
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
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
        path: '',
        component: DataBindingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
    DataBindingComponent,
    DirectivesComponent,
    PipesComponent ];
