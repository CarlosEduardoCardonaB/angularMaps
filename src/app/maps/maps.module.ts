import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/fullScreenPage/fullScreenPage.component';
import { MarkersPageComponent } from './pages/markersPage/markersPage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';
import { ZoomPageComponent } from './pages/zoomPage/zoomPage.component';
import { CounterAloneComponent } from '../alone/components/counterAlone/counterAlone.component';


@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomPageComponent,

  ],
  imports: [
    CommonModule,
    CounterAloneComponent,
    MapsRoutingModule,
    SideMenuComponent
  ]
})
export class MapsModule { }
