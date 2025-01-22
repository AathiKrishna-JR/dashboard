import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './dashoard/server/server.component';
import { TrafficComponent } from './dashoard/traffic/traffic.component';
import { TicketsComponent } from './dashoard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ServerComponent,TrafficComponent,TicketsComponent],
  standalone: true,
  templateUrl: './app.component.html',
}) 
export class AppComponent {}
  