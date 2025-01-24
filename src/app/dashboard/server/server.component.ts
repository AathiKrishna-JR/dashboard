import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit{
  currentStatus : 'online' | 'offline' | 'unknown' = "online";
  
  constructor(){}

  ngOnInit(): void {
    
    setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5)
      {
        this.currentStatus = "offline";
      }
      else if(rnd < 0.9){
        this.currentStatus = "online";
      }
      else{
        this.currentStatus = "unknown";
      }
      
    },5000);
  }
}
