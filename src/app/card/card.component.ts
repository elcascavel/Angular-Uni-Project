import { Component, OnInit } from '@angular/core';
import { ARTISTAS } from '../modelos/artista-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  artistas = ARTISTAS;

  conteudoVisivelMap: { [key: number]: boolean} = {};

  onClick(index: number)
  {
    this.conteudoVisivelMap[index] = !this.conteudoVisivelMap[index];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
