import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonateDialogComponent } from './donate/donate.comp';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DonateDialogComponent, {
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
