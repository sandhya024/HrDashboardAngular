import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  notificationOpen = false;
  userDropdownOpen = false;
  searchQuery = '';

  constructor(public dataService: DataService) { }

  toggleSidebar(): void {
    this.dataService.toggleSidebar();
  }

  toggleNotifications(): void {
    this.notificationOpen = !this.notificationOpen;
    if (this.notificationOpen) {
      this.userDropdownOpen = false;
    }
  }

  toggleUserDropdown(): void {
    this.userDropdownOpen = !this.userDropdownOpen;
    if (this.userDropdownOpen) {
      this.notificationOpen = false;
    }
  }

  closeDropdowns(): void {
    this.notificationOpen = false;
    this.userDropdownOpen = false;
  }
}