import { Component, OnInit } from '@angular/core';
import { Aluno } from '../modelos/aluno';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  marco: Aluno = {
    name: 'Marco Moreira',
    id: 73415,
    class: 1,
    course: 'Comunicação e Multimédia'
  }

  simao: Aluno = {
  name: 'Simão Amaral',
  id: 65083,
  class: 1,
  course: 'Comunicação e Multimédia'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
