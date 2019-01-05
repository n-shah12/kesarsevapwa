import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonateDialogComponent } from './donate/donate.comp';
import { MatDialog } from '@angular/material';
import { GlobalService } from 'src/app/common/global';

@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog, private global: GlobalService) { }

  openDialog() {
    this.dialog.open(DonateDialogComponent, {
      data: {
        animal: ''
      },
      minWidth: '250PX'
    });
  }

  title: string = 'My first AGM project';
  lat: number = 23.025165;
  lng: number = 72.572221;

  ngOnInit(): void {
    this.getLocation();
  }

  //function that gets the location and returns it
  getLocation() {
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        that.showPosition(position);
      }, (err) => {
        console.log(this.locationError(err));
      });
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  //function that retrieves the position
  showPosition(position) {
    console.log(this);
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    }
    this.lat = Number(position.coords.latitude);
    this.lng = Number(position.coords.longitude);
    console.log(location)
  }


  locationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        return "Location information is unavailable."
        break;
      case error.TIMEOUT:
        return "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        return "An unknown error occurred."
        break;
    }
  }
  //request for location



}
