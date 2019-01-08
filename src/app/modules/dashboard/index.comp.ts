/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { DonateDialogComponent } from './donate/donate.comp';
import { MatDialog } from '@angular/material';
import { GlobalService } from 'src/app/common/global';

import { MapsAPILoader } from '@agm/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';
import { OrderNwDialogComponent } from './ordernow/ord.comp';
import { SevaKendraService } from 'src/app/services/dashboard-service';

@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss'],
  providers: [SevaKendraService]
})
export class DashboardComponent implements OnInit {
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  loading  = false;
  markers = [];
  options = {};
  constructor(public dialog: MatDialog, public global: GlobalService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private skservice: SevaKendraService) { }

  public handleAddressChange(address: any) {
    // Do some stuff
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.lng = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();

  }

  openDialog() {
    this.dialog.open(DonateDialogComponent, {
      data: {
        animal: ''
      },
      minWidth: '250PX'
    });
  }

  openOrderDialog() {
    this.dialog.open(OrderNwDialogComponent, {
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

    //create search FormControl


  }

  clickedMarker(m,i){
    this.openOrderDialog();
  }
  //function that gets the location and returns it
  getLocation() {
    this.loading = true;
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
    this.getNearbyKendra();

  }


  getNearbyKendra() {
    
    this.skservice.getSevaKendra({
      'lat': this.lat,
      'lng': this.lng,
      'dist': 6000
    }).subscribe((data) => {

      const marks = data.data;
      if(marks.length > 0){

        for (let i = 0; i < marks.length; i++) {
          const element = marks[i];
        
          this.markers.push({
            lat: Number(element.Loc.x),
          lng: Number(element.Loc.y),
          label: element.addr
          });

        }

      }

      this.loading = false;
    }, (err) => {

    });
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
