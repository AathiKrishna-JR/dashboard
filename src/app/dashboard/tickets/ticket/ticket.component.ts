import { Component, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailVisible = signal(false);

  onToggleDetails(){
  //  this.detailVisible.set(!this.detailVisible);
  this.detailVisible.update((wasVisible) => !wasVisible);
  }
}
