import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { NavComponent } from './shared/components/layout/nav/nav.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, FooterComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
}
