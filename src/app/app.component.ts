import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './dashboard/server/server.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ServerComponent,TrafficComponent,TicketsComponent,DashboardItemComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl : './app.component.css'
}) 
export class AppComponent {}
  