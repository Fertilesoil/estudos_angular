import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = 'Fergson';
  dataNascimento = '1997-03-27';
  urlImagem = '../../assets/images.jpeg';

  mostrarData() {
    alert(`A data de nascimento do ${this.nome} é: ${
      this.dataNascimento 
    }`);
  }
}
