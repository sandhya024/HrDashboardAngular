import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DataService, Employee, Activity, StatCard } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  statCards: StatCard[] = [];
  employees: Employee[] = [];
  recentActivities: Activity[] = [];

  // Chart configuration
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 70,
        max: 100
      }
    }
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.statCards = this.dataService.getStatCards();
    this.employees = this.dataService.getEmployees();
    this.recentActivities = this.dataService.getRecentActivities();
    this.lineChartData = this.dataService.getPerformanceData();
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  getStatusClass(status: string): string {
    return status === 'Active' ? 'status-active' : 'status-leave';
  }
}