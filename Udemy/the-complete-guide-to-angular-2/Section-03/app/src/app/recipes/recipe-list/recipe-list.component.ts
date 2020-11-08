import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe', 'https://static.thenounproject.com/png/2334458-200.png'),
    new Recipe('A Test Recipe 2', 'This is simply another test recipe', 'https://static.thenounproject.com/png/2334458-200.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
