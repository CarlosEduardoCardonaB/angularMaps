import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-zoom-page',
  standalone: false,
  templateUrl: './zoomPage.component.html',
  styleUrl: './zoomPage.component.css',
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy {


  @ViewChild('divmap') divMap?: ElementRef;

  public zoom: number = 10;

  private map?: leaflet.Map;
  private userMarker: leaflet.Marker<any> | undefined;
  public currentLatLang: leaflet.LatLng = new leaflet.LatLng(4.655447605105199, -74.10698010429192);

  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento html no existe';

    //this.map = leaflet.map('divmap').setView([51.505, -0.09], 13);

    this.map = leaflet.map(this.divMap.nativeElement).setView(this.currentLatLang, this.zoom);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

      this.mapListener();
  }

  ngOnDestroy(): void {
    //Con este limpiamos todos los listener que creamos dentro de mapListener para que no queden vivos durante la sesion
    this.map?.remove();
  }

  mapListener(){
    if(!this.map) throw 'El mapa no existe';

    //Con esta linea capturamos el evento de zoom del mapa
    this.map.on('zoom', (ev)=>{
      //Con el simbolo ! siempre le decimos a typescript que no se preocupe que siempre vamos a tener valor de mapa si llegamos a este punto.
      //Por lo que validamos en el primer if de la función y si no entonces lanzamos el throw
      this.zoom = this.map!.getZoom()
      //Con este console.log podemos ver el evento del zoom en la consola y toda la información de este evento que podemos usar
      //console.log(ev);
    });

    //Con esta linea capturamos el evento de fin del zoom del mapa, y lo controlamos con el if
    this.map.on('zoomend', (ev)=>{
      //Con el simbolo ! siempre le decimos a typescript que no se preocupe que siempre vamos a tener valor de mapa si llegamos a este punto.
      //Por lo que validamos en el primer if de la función y si no entonces lanzamos el throw
      if( this.map!.getZoom() < 16 ) return;

      this.map!.setZoom(16);
    });

    this.map.on('move', ()=>{
      this.currentLatLang = this.map!.getCenter();
      //Con este console.log vemos las coordenadas de latitud y longitud cuando movemos el mapa con el mouse en la consola
      //console.log(this.currentLatLang);
    });

  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value: string){
      this.zoom = Number(value);
      this.map?.setZoom(this.zoom);
  }

 }
