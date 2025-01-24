import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit{

  
 // private form = viewChild<ElementRef<HTMLFormElement>>('form')
  @ViewChild('form') form ?: ElementRef<HTMLFormElement>;
  onSubmit(title : string, text : string , form : HTMLFormElement){
       console.log(title,text);
       this.form?.nativeElement.reset();
  }
ngOnInit(){
  console.log('ONINIT');
  console.log(this.form?.nativeElement);
}

ngAfterViewInit(){
  console.log('AFTER VIEW INIT');
  console.log(this.form?.nativeElement);
}

}
