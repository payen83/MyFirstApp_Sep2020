import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  public coords: any;
  constructor() {
    this.coords = { latitude: null, longitude: null };
  }

  async getCurrentPosition() {
    const res = await Geolocation.getCurrentPosition();
    this.coords = res.coords;
    console.log('Current', this.coords);
    this.initMap();
  }

  initMap() {
    var mymap = L.map('map').setView([this.coords.latitude, this.coords.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    L.marker([this.coords.latitude, this.coords.longitude]).addTo(mymap)
      .bindPopup('My Location!')
      .openPopup();

  }

  ngOnInit() {
    this.getCurrentPosition();
  }

}
