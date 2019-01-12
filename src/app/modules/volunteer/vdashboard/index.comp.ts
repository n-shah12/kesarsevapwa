import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RefillDialogComponent } from './refill/refill.comp';
import { GlobalService } from 'src/app/common/global';

import { VolunterrService } from '../../../services/volunteer-service';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
  locations?: any,
  mode?: any,
  selected: any,
  result: any

}
declare var com: any;
@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss'],
  providers: [VolunterrService]
})
export class VDashComponent implements OnInit {

  constructor(public dialog: MatDialog, public global: GlobalService, private router: Router,
    private volunterrservice: VolunterrService, private msg: MatSnackBar) { }
  openRefillDialog() {
    this.dialog.open(RefillDialogComponent, {
      data: {
        animal: ''
      },
      minWidth: '250PX'
    });
  }
  title: string = '';
  lat: number = 23.025165;
  lng: number = 72.572221;
  user: any;
  issendlocation: boolean = false;
  isopen: boolean = false;
  ngOnInit(): void {
    this.user = this.global.getuser();
    if (!(this.user && this.user.UserId)) {
      this.router.navigate(['/login']);
    } else {
      let that = this;
      setTimeout(() => {
        com.load('.example-sidenav-content', 'Waiting for your location');
        that.getLocation();
        that.getLocationbyuserid();
      }, 100);
    }

  }
  myorder(){
    this.router.navigate(['/orderlist']);
  }
  sendlocationdetail() {
    var loc = "(" + this.lat + "," + this.lng + ")";
    var insertupdate = {
      "LocationAddress": "",
      "Loc": loc,
      "LocationTypeId": "1",
      "CreatedBy": this.user.UserId,
      "UserId": this.user.UserId,
      "IsOpen": this.issendlocation,
      "IsActive": true
    }
    com.load('.example-sidenav-content', 'Changing status. please wait...');
    this.volunterrservice.addupdatelocation(insertupdate).subscribe((data) => {
      if (data.data.length > 0) {
        let msg = '';
        if (insertupdate.IsOpen) {
          msg = 'Online Successfully';
        } else {
          msg = 'Offline Successfully';
        }
        this.msg.open(msg, 'Ok', {
          duration: 2000,
        });
        com.hload('.example-sidenav-content');
      } else {
        this.msg.open('Error while changeing status', 'Ok', {
          duration: 2000,
        });
        com.hload('.example-sidenav-content');
      }

    }, (err) => {
      com.hload('.example-sidenav-content');
    });
  }
  getLocationbyuserid() {
    var senddata = { "flag": "buid", "UserId": this.global.getuser().UserId };
    this.volunterrservice.getLoctionbyid(senddata).subscribe((data) => {
      if (data.data.length > 0) {
        this.lat = Number(data.data[0].Loc.x);
        this.lng = Number(data.data[0].Loc.y);
        this.issendlocation = data.data[0].IsOpen;
      }

    });
  }



  //function that gets the location and returns it
  getLocation() {
    //this.zoom = 10;
    //this.loading = true;
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        that.showPosition(position);
        com.hload('.example-sidenav-content');
      }, (err) => {
        console.log(this.locationError(err));
        com.hload('.example-sidenav-content');
      });
    } else {
      console.log("Geo Location not supported by browser");
      com.hload('.example-sidenav-content');
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
    com.hload('.example-sidenav-content');
    //this.getNearbyKendra();
    //this.zoom = 10;
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    com.hload('.example-sidenav-content');
  }
  //request for location

}
