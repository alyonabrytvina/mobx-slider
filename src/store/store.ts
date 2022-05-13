import { action, makeObservable, observable } from 'mobx';

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable postLikesCount: number = 0;
  @observable commentsArr: string[] = [];
  @observable commentsCount: number = 0;

  @action postLikesInc = () => this.postLikesCount++;
  @action commentsCountInc = () => this.commentsCount++;
  @action addComment = (value: string) => this.commentsArr.push(value);
}

export const store = new Store();
