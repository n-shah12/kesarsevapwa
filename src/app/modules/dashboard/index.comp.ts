import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class DashboardComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit(): void {

  }
}
