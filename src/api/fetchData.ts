export interface Recipe{
    imgUrl: string;
    id: string,
}

export interface RecipesResponse{
    tags: [],
    bookmarks: [],
    recipes: Recipe[],
    ingredients: []
}

export const fetchRecipes = (): Promise<RecipesResponse> => fetch('https://the-first-project.herokuapp.com/db/')
  .then((response) => response.json());
