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

declare var com: any;
declare var google:any;
@Component({
  templateUrl: 'index.comp.html',
  styleUrls: ['./index.comp.scss'],
  providers: [SevaKendraService]
})
export class DashboardComponent implements OnInit {
  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;
  loading = false;
  markers = [];
  options = {};
  lists = [];
  skuser: any;
  zoom = 12;
  address = '';
  selectedMarker: any = {};
  constructor(public dialog: MatDialog, public global: GlobalService, 
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private skservice: SevaKendraService,private router :Router ) { }

  public handleAddressChange(address: any) {
    // Do some stuff
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.lng = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();
    this.zoom = 13;

    this.getNearbyKendra();


  }
  openvjfrm(){
    this.router.navigate(['/vjfrm']);
  }
  openDialog() {
    this.dialog.open(DonateDialogComponent, {
      data: {
        animal: ''
      },
      minWidth: '250PX'
    });
  }

  openOrderDialog(d) {
    let user= this.global.getuser();
    if( !(user && user.UserId)){
        this.router.navigate(['/login']);
    }else{
    this.dialog.open(OrderNwDialogComponent, {
      data: {
        animal: '',
        mode: d,
        locations: this.lists,
        selected: this.selectedMarker,
        resultval:this.markers
      },
      minWidth: '250PX'
    });
  }
  }

  title: string = 'My first AGM project';
  lat: number = 23.025165;
  lng: number = 72.572221;

  ngOnInit(): void {

    if(this.global.isRider()){

    }else{
    let that = this;
    setTimeout(() => {
      com.load('.bottompanel', 'Waiting for your location');
      that.getLocation();
    }, 100);
  }

    //create search FormControl


  }
  ngAfterViewInit(): void {

    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }
  clickedMarker(m, i) {
    this.selectedMarker=m;
    this.openOrderDialog('');
  }
  //function that gets the location and returns it
  getLocation() {
    this.zoom = 13;
    this.loading = true;
    let that = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        that.showPosition(position);
        com.hload('.bottompanel');
      }, (err) => {
        com.hload('.bottompanel');
        console.log(this.locationError(err));
      });
    } else {
      com.hload('.bottompanel');
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
    this.zoom = 13;
    this.getAddress(this.lat, this.lng);
  }


  getNearbyKendra() {
    // if(this.markers.length > 0){
    //   this.markers.splice(0,1);
    // }
    this.markers = [];
    this.lists = [];
    this.skservice.getSevaKendra({
      'lat': this.lat,
      'lng': this.lng,
      'dist': 6000
    }).subscribe((data) => {
      const marks = data.data;
      if (marks.length > 0) {
        this.lists = marks;
        for (let i = 0; i < marks.length; i++) {

          const element = marks[i];

          this.markers.push({
            lat: Number(element.Loc.x),
            lng: Number(element.Loc.y),
            label: element.addr,
            LocationMasterId: element.LocationMasterId,
            UserId: element.UserId
          });


        }

      }
      com.hload('.bottompanel');
      this.loading = false;
    }, (err) => {
      com.hload('.bottompanel');
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    com.hload('.bottompanel');
  }

  getAddress(lat1, lng1){
    var latlng = new google.maps.LatLng(Number(lat1), Number(lng1));
    var geocoder = new google.maps.Geocoder();
    let that = this;
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
              that.address = results[1].formatted_address;
              
          }
      }
  });
  }

}
