import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Pizza Description',
      'https://th.bing.com/th/id/OIP.jEmrIksM89A_JdDfGUUB9gHaEw?pid=ImgDet&rs=1'
    ),
    new Recipe(
      'Burger',
      'Burger Description',
      'https://th.bing.com/th/id/OIP.jEmrIksM89A_JdDfGUUB9gHaEw?pid=ImgDet&rs=1'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
