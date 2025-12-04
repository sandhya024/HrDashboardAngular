import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  sidebarOpen = true;
  private sidebarSub!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sidebarSub = this.dataService.sidebarOpen$.subscribe(isOpen => {
      this.sidebarOpen = isOpen;
    });
  }

  toggleSidebar() {
    this.dataService.toggleSidebar();
  }

  ngOnDestroy(): void {
    if (this.sidebarSub) {
      this.sidebarSub.unsubscribe();
    }
  }
}
