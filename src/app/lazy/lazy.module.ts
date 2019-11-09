import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { LazyComponent } from './lazy/lazy.component';

@NgModule({
    imports:
    [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
        {path: '', component: LazyComponent}
    ]) ],
    declarations: [ LazyComponent ]
})

export default class LazyModule {
}
