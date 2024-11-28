import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-fullscreen-page',
  standalone: false,
  templateUrl: './fullScreenPage.component.html',
  styleUrl: './fullScreenPage.component.css',
})
export class FullScreenPageComponent implements AfterViewInit{

  @ViewChild('divmap') divMap?: ElementRef;

  private map: any;
  private userMarker: leaflet.Marker<any> | undefined;


  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(){

    if( !this.divMap ) throw 'El elemento html no existe';

    //this.map = leaflet.map('divmap').setView([51.505, -0.09], 13);
    this.map = leaflet.map(this.divMap.nativeElement).setView([40, -74.5], 13);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
  }

  getLocation(){

      if(navigator.geolocation){

        const myIcon = leaflet.icon({
          iconUrl:'assets/tu-ubicacion.png',
          iconSize: [25, 41]
        })
        navigator.geolocation.getCurrentPosition((position) => {
          const coords:[number, number] = [position.coords.latitude, position.coords.longitude];

          if( this.userMarker ){
           this.userMarker = leaflet.marker(coords);
          }else{
            this.userMarker = leaflet.marker(coords, {
                                      icon:myIcon,
                                      draggable:true
                                    }).addTo(this.map)
                                      .bindPopup('Estas aqui')
                                      .openPopup();

            this.userMarker.on('dragend', (event) =>{
              const marker = event.target;
              const position = marker.getLatLng();
              marker.setLatLng(position).openPopup();
              this.map.setView(position, 19);
              console.log(`Marcador movido a: ${position.lat},${position.lng}`)
            })

          }
          this.map.setView(coords,19);

        }, () => {
          alert('No se pudo obtener la geolocalización')
        })
      }else{
        alert('Geolocalización no soportada por el navegador');
      }

  }


 }
