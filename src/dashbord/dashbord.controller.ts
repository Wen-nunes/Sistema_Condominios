// dashbord.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { DashboardService } from '../app.service'; // Ajuste o caminho conforme necessário


@Controller('dashboard') 
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @UseGuards(AuthGuard)
  @Get('stats')
  async getStats() {
    return await this.dashboardService.getStats();
  }
}