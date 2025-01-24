import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, model, output, viewChild } from '@angular/core';
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
  
  title = model.required<{width:string;height : string}>();
  
  isEmpty: boolean = true;
  enteredTitle= '';
  enteredText = '';
  add = output<{title : string; text : string}> ();
 // private form = viewChild<ElementRef<HTMLFormElement>>('form')
  @ViewChild('form') form ?: ElementRef<HTMLFormElement>;

  onSubmit(title : string, text : string ){
    if(! this.isEmpty){
        this.add.emit({title : this.enteredTitle, text : this.enteredText})
        this.enteredTitle= '';
        this.enteredText = '';
    }
        //  this.form?.nativeElement.reset();
  }
  
checkIfEmpty(title : string){

  if(title.length === 0){
    this.isEmpty == true;
  }
  else{
    this.isEmpty == false;
  }

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
