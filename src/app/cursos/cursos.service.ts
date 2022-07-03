import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CursosService
{  
  emitirCursoCriado = new EventEmitter();
  static criouNovoCurso = new EventEmitter();

  private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

  constructor(private logService: LogService)
  {
    console.log('CursosService');
  }

  getCursos()
  {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string)
  {
    this.logService.consoleLog('Criando um novo curso: ' + curso);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}