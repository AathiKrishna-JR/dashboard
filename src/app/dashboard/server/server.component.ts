import { Component, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-server',
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown'>("online");
  
  constructor(){
    effect(() => {
    console.log(this.currentStatus); 
  })};

  ngOnInit(): void {
    
    setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5)
      {
        this.currentStatus.set('offline');
      }
      else if(rnd < 0.9){
        this.currentStatus.set("online");
      }
      else{
        this.currentStatus.set("unknown") ;
      }
      
    },5000);
  }
}
