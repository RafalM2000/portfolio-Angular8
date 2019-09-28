import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';     // Add your component here
import { DirectivesComponent } from './directives/directives.component';  // Add your component here


const routes: Routes = [
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'directives',
        component: DirectivesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ DataBindingComponent, DirectivesComponent ];
