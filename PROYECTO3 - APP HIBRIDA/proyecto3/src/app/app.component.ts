import { Component } from '@angular/core';
import { IngredientesService } from './servicios/ingredientes.service';
import { RecetaService } from './servicios/receta.service';
import { Users } from './interfaz/users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto3';
}
