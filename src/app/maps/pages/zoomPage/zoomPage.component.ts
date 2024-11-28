import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-zoom-page',
  standalone: false,
  templateUrl: './zoomPage.component.html',
  styleUrl: './zoomPage.component.css',
})
export class ZoomPageComponent implements AfterViewInit {

  @ViewChild('divmap') divMap?: ElementRef;

  private map: any;
  private userMarker: leaflet.Marker<any> | undefined;

  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento html no existe';

    //this.map = leaflet.map('divmap').setView([51.505, -0.09], 13);
    this.map = leaflet.map(this.divMap.nativeElement).setView([40, -74.5], 13);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
  }
 }
