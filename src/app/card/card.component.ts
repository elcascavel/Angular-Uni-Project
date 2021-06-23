import { Component, OnInit } from '@angular/core';
import { ARTISTAS } from '../modelos/artista-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  artistas = ARTISTAS;

  conteudoVisivel = false;

  onClick()
  {
    this.conteudoVisivel = !this.conteudoVisivel;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
