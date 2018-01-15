import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TagService, ITag} from './services/tags.service';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { SliderComponent } from './shared-components/slider/slider.component';
import { TodoEditComponent } from './shared-components/todo-edit/todo-edit.component';
import {TodoComponent} from './shared-components/todo/todo.component';
import { StatusCodesService } from './services/status-codes.service';
import { statusCodesToken } from './tokens/app-tokens';
import { TodoItemsService } from './services/todo-items.service';


export const loadTagsFact = function(http: HttpClient, Tags: TagService) {
  console.log(http);
  return function() {
    return http.get<ITag[]>('/assets/tags.json')
    .toPromise()
    .then((response) => {
      Tags.initWithTags(response);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    TodoEditComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: APP_INITIALIZER, useFactory: loadTagsFact, multi: true, deps: [HttpClient, TagService]},
  TagService,
  {provide: statusCodesToken, useValue: StatusCodesService},
  TodoItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
