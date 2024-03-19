import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {

  descricoes = [];
  descricao = '';

  constructor(private logger: LoggerService) { }

  adicionarDescricao(): void {
    this.logger.logar(`A descricao [${this.descricao}] foi adicionada com sucesso!`);
    // console.log(`A descricao [${this.descricao}] foi adicionada com sucesso!`);
    this.descricao = '';
  }

  exibirLogs(): void {
    this.logger.exibeTodosLogs();
  }
}
