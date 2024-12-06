import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'map-mini-map',
  standalone: false,
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {

  //private map?: leaflet.Map;
  @ViewChild ('divmap') divMap?: ElementRef;
  @Input() latLng?: [ number, number ];


  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement ) throw 'Div map not found';

      if(!this.latLng) throw "latLng can't be null";

      const map = leaflet.map(this.divMap!.nativeElement, {
        center: this.latLng,
        zoom: 15,
        dragging: false,
        zoomControl: false,
        boxZoom: false,
        scrollWheelZoom: false

    });
      leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const myIcon = leaflet.icon({
        iconUrl:'assets/tu-ubicacion.png',
        iconSize: [25, 41],
      });

      leaflet.marker(this.latLng, {
            icon:myIcon,
            draggable:false,
            alt: 'Eduardo Cardona'
          }).addTo(map)

  }


}
