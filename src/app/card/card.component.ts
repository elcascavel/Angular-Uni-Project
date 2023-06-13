import { Component, OnInit } from '@angular/core';
import { ARTISTAS } from '../modelos/artista-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  artistas: Artista[] = ARTISTAS;
  conteudoVisivelMap: { [key: number]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(index: number): void {
    this.conteudoVisivelMap[index] = !this.conteudoVisivelMap[index];
  }
}

interface Artista {
  name: string;
  img: string;
  emoji: string;
  album: string[];
}
