import {
  Component,
  OnDestroy,
  OnInit,
  DestroyRef,
  inject,
  signal,
  effect,
  } from '@angular/core';
  
  @Component({
  selector: 'app-server',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  })
  export class ServerComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  
  constructor() {
  effect(() => {
  console.log(this.currentStatus());
  });
  }
  
  ngOnInit() {
  console.log('On Init');
  const interval = setInterval(() => {
  const rnd = Math.random();
  
  if (rnd < 0.5) {
  this.currentStatus.set('online');
  } else if (rnd < 0.9) {
  this.currentStatus.set('offline');
  } else {
  this.currentStatus.set('unknown');
  }
  }, 5000);
  this.destroyRef.onDestroy(() => {
  clearInterval(interval);
  });
  }
  
  ngAfterViewInit() {
  console.log('After View Init');
  }
  // ngOnDestroy() {
  // clearTimeout(this.interval);
  // }
  }