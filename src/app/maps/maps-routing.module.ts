import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/fullScreenPage/fullScreenPage.component';
import { MarkersPageComponent } from './pages/markersPage/markersPage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';
import { ZoomPageComponent } from './pages/zoomPage/zoomPage.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenPageComponent
      },
      {
        path: 'markers',
        component: MarkersPageComponent
      },
      {
        path: 'properties',
        component: PropertiesPageComponent
      },
      {
        path: 'zoom-range',
        component: ZoomPageComponent
      },
      {
        path: '**',
        redirectTo: 'fullscreen'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
