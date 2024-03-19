import { Component } from '@angular/core';
import { Celular } from '../Types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    { id: 1, nome: "Celular XL", descricao: "Celular grande", esgotado: false },
    { id: 2, nome: "Celular M", descricao: "Celular médio", esgotado: false },
    { id: 3, nome: "Celular P", descricao: "Celular pequeno", esgotado: true }
  ]
}
