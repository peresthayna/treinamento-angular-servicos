import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => {
        this.curso = cursoCriado
        console.log(cursoCriado)}
    );
  }

}
