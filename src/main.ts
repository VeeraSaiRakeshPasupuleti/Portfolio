import { bootstrapApplication } from '@angular/platform-browser';
import { PortfolioComponent } from './app/portfolio.component';
import { appConfig } from './app/app.config';

bootstrapApplication(PortfolioComponent, appConfig).catch(err => console.error(err));
