import {Injectable} from '@angular/core';

export interface ITag {
  value: string;
  label: string;
}

@Injectable()
export class TagService {
  public tags: ITag [] =[];

  constructor() { }

  public initWithTags (tags: ITag[] ) {
    this.tags = tags;
  }
}
