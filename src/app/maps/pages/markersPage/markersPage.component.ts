import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';

interface MarkerAndColor {
  color: string,
  marker: leaflet.Marker
}

@Component({
  selector: 'app-markers-page',
  standalone: false,
  templateUrl: './markersPage.component.html',
  styleUrl: './markersPage.component.css',
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('divmap') divMap?: ElementRef;


  private map?: leaflet.Map;
  public markers: MarkerAndColor[] = [];
  public currentLatLang: leaflet.LatLng = new leaflet.LatLng( 12.58083512845109, -81.70746803283693);


  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento html no existe';

    //this.map = leaflet.map('divmap').setView([51.505, -0.09], 13);

    this.map = leaflet.map(this.divMap.nativeElement).setView(this.currentLatLang, 16);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);




  }

  ngOnDestroy(): void {
    //Con este limpiamos todos los listener que creamos dentro de mapListener para que no queden vivos durante la sesion
    this.map?.remove();
  }

  createMarket(){
    if(!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker( latLng: leaflet.LatLng, color: string){
    if(!this.map) return;

      const myIcon = leaflet.icon({
        iconUrl:'assets/tu-ubicacion.png',
        iconSize: [25, 41],
      });

      //const coords:[number, number] = [12.582695924427341, -81.70397742859899];
      //this.userMarker = leaflet.marker(latLng);

      const marker = leaflet.marker(latLng, {
            icon:myIcon,
            draggable:true,
            alt: 'Eduardo Cardona'
          }).addTo(this.map)
          .bindPopup('Sos un crack')
          .openPopup();

          this.markers.push({
            color,
            marker
          });
    }


    delteMarker(indice: number){
        this.markers[indice].marker.remove();
        this.markers.splice( indice, 1)
    }

 }
