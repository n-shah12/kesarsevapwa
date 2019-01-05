import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { RefillDialogComponent } from './refill/refill.comp';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class VDashComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  openRefillDialog() {
    this.dialog.open(RefillDialogComponent, {
      data: {
        animal: ''
      },
      minWidth:'250PX'
    });
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit(): void {

  }
}
