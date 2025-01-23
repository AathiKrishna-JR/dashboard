import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './dashoard/server/server.component';
import { TrafficComponent } from './dashoard/traffic/traffic.component';
import { TicketsComponent } from './dashoard/tickets/tickets.component';
import { DashboardItemComponent } from './dashoard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ServerComponent,TrafficComponent,TicketsComponent,DashboardItemComponent],
  standalone: true,
  templateUrl: './app.component.html',
}) 
export class AppComponent {}
  