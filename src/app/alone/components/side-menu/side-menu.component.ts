import { Component } from '@angular/core';
import { MapsRoutingModule } from '../../../maps/maps-routing.module';
import { RouterModule } from '@angular/router';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [MapsRoutingModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',

})
export class SideMenuComponent {

  public menuItem: MenuItem[] = [
    { route: '/maps/fullscreen', name: 'Full-Screen'},
    { route: '/maps/markers', name: 'Markers'},
    { route: '/maps/zoom-range', name: 'Zoom'},
    { route: '/maps/properties', name: 'Houses'},
    { route: '/alone', name: 'Alone Page'}
  ];
 }
