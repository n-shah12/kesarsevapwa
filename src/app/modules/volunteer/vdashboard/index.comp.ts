import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { RefillDialogComponent } from './refill/refill.comp';
import { GlobalService } from 'src/app/common/global';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss']
})
export class VDashComponent implements OnInit {
  constructor(public dialog: MatDialog, private global: GlobalService) { }
  openRefillDialog() {
    this.dialog.open(RefillDialogComponent, {
      data: {
        animal: ''
      },
      minWidth: '250PX'
    });
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit(): void {
    this.getLocation();
  }

  //function that gets the location and returns it
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, (err) => {
        console.log(this.locationError(err));
      });
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  //function that retrieves the position
  showPosition(position) {
    var location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    }
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
