import { Component, OnInit, inject } from '@angular/core';
import { DashboardService } from '../services/dashboard-service.service';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  chartType: ChartType = 'bar';
  private chart: Chart | null = null;

  dashboardService = inject(DashboardService);

  ngOnInit() {
    this.initChart();
  }

  ngOnDestroy() {
    if (this.chart) this.chart.destroy();
  }

  initChart() {
    const canvas = document.getElementById('mybarchart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: {
        labels: ['Hour 1', 'Hour 2', 'Hour 3', 'Hour 4', 'Hour 5'],
        datasets: [
          { label: 'Assigned', data: [10, 20, 15, 5, 30], backgroundColor: '#007bff' },
          { label: 'Resolved', data: [5, 15, 10, 2, 20], backgroundColor: '#28a745' },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }

  setChartType(type: ChartType) {
    this.chartType = type;
    if (this.chart) this.chart.destroy();
    this.initChart();
  }
}
