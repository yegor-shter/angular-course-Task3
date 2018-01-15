import { TestBed, inject } from '@angular/core/testing';

import { TodoItemService } from './todo-item.service';

describe('TodoItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItemService]
    });
  });

  it('should be created', inject([TodoItemService], (service: TodoItemService) => {
    expect(service).toBeTruthy();
  }));
});
