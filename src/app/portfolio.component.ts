import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, HomeComponent, ProjectsComponent, ContactComponent, FooterComponent],
  template: `
    <app-nav />
    <main>
      <app-home />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class PortfolioComponent {}
