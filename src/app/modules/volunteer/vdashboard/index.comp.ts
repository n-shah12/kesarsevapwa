import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DonateComponent } from './donate/donate.comp';

@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class VDashComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public dialog: MatDialog){

  }
  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(DonateComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
