import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  category: Category[] = [
    {
      id: '1',
      name: 'Music',
      image: '../../assets/imgs/music.png'
    },
    {
      id: '2',
      name: 'Film',
      image: '../../assets/imgs/film.png'
    },
    {
      id: '3',
      name: 'Comedy',
      image: '../../assets/imgs/comedy.png'
    }, {
      id: '4',
      name: 'Book',
      image: '../../assets/imgs/book.png'
    }
  ]

  getCategory() {
    return this.category
  }
}
