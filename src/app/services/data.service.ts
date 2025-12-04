import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  status: string;
  performance: string;
}

export interface Activity {
  id: number;
  action: string;
  user: string;
  time: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  color: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sidebarOpenSubject = new BehaviorSubject<boolean>(true);
  public sidebarOpen$: Observable<boolean> = this.sidebarOpenSubject.asObservable();

  constructor() { }

  toggleSidebar(): void {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
  }

  getSidebarState(): boolean {
    return this.sidebarOpenSubject.value;
  }

  getStatCards(): StatCard[] {
    return [
      { label: 'Total Employees', value: '248', change: '+12%', color: 'bg-blue', icon: 'users' },
      { label: 'Active Projects', value: '32', change: '+5%', color: 'bg-green', icon: 'briefcase' },
      { label: 'Pending Leaves', value: '8', change: '-3%', color: 'bg-yellow', icon: 'clock' },
      { label: 'Avg Performance', value: '89%', change: '+2%', color: 'bg-purple', icon: 'trending' }
    ];
  }

  getEmployees(): Employee[] {
    return [
      { id: 1, name: 'Sarah Johnson', role: 'Senior Developer', department: 'Engineering', status: 'Active', performance: '92%' },
      { id: 2, name: 'Michael Chen', role: 'Product Manager', department: 'Product', status: 'Active', performance: '88%' },
      { id: 3, name: 'Emily Rodriguez', role: 'UX Designer', department: 'Design', status: 'Active', performance: '95%' },
      { id: 4, name: 'David Kim', role: 'HR Specialist', department: 'Human Resources', status: 'On Leave', performance: '85%' },
      { id: 5, name: 'Jessica Brown', role: 'Marketing Lead', department: 'Marketing', status: 'Active', performance: '90%' }
    ];
  }

  getRecentActivities(): Activity[] {
    return [
      { id: 1, action: 'New employee onboarded', user: 'Sarah Johnson', time: '2 hours ago' },
      { id: 2, action: 'Leave request approved', user: 'Michael Chen', time: '4 hours ago' },
      { id: 3, action: 'Performance review completed', user: 'Emily Rodriguez', time: '1 day ago' },
      { id: 4, action: 'Training session scheduled', user: 'David Kim', time: '2 days ago' }
    ];
  }

  getPerformanceData(): any {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Performance',
        data: [85, 88, 82, 90, 87, 92],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
        fill: true
      }]
    };
  }
}