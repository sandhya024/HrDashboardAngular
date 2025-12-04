import { Component, Input } from '@angular/core';

interface NavItem {
  icon: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isOpen = true;

  navItems: NavItem[] = [
    { icon: '👥', label: 'Dashboard', active: true },
    { icon: '💼', label: 'Employees', active: false },
    { icon: '📈', label: 'Performance', active: false },
    { icon: '🕐', label: 'Attendance', active: false }
  ];

  setActive(index: number): void {
    this.navItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}