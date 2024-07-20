import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterJugComponent } from "./water-jug/water-jug.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WaterJugComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'water-jug-challenge';
}
