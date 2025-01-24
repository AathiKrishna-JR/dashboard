import { AfterContentInit, Component, ContentChild, ElementRef, ViewEncapsulation, afterNextRender, afterRender, input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation : ViewEncapsulation.None,
  host : {
    class: 'control'
  }
})
export class ControlComponent implements AfterContentInit{
 

  constructor(){
    
    afterRender(()=>{
      console.log("AFTER_RENDER");
    });
    afterNextRender(() => {
      console.log("after_next_render");
      
    });

  }

  ngAfterContentInit(): void {
    console.log("AFTER VIEW INIT");
  }

  label = input.required<string>();
  @ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement >

}
