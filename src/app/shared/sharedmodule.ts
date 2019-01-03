import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule, MatSelect } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
@NgModule({
    declarations: [],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule],
    providers: [],
})
export class ESharedModule { }