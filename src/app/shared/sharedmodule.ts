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
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

import { MatDialogModule } from '@angular/material/dialog';
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
        CommonModule,
        MatSlideToggleModule,
        MatDialogModule
        
    ],
    exports: [MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        MatSlideToggleModule,
        MatDialogModule],
    providers: [],
})
export class ESharedModule { }