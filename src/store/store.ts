import {
  action, makeObservable, observable,
} from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { fetchRecipes, Recipe, RecipesResponse } from '../api/fetchData';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable postLikesCount: number = 0;
  @observable commentsArr: string[] = [];
  @observable commentsCount: number = 0;
  @observable imagesArr: Recipe[] = [];
  @observable state = 'pending';

  @action fetchData = () => {
    fetchRecipes().then(this.fetchDataSuccess);
  };
  @action fetchDataSuccess = (response: RecipesResponse) => {
    this.state = 'success';
    this.imagesArr = response.recipes.map((recipe: Recipe) => ({
      imgUrl: recipe.imgUrl, id: uuidv4(),
    }));
  };

  @action fetchDataFailure = () => {
    this.state = 'error';
  };

  @action postLikesInc = () => this.postLikesCount++;
  @action commentsCountInc = () => this.commentsCount++;
  @action addComment = (value: string) => this.commentsArr.push(value);
}

export const store = new Store();
