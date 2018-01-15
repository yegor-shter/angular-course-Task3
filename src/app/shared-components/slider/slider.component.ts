import { Component, OnInit, Input, Output, ContentChildren, ElementRef, QueryList, AfterContentInit, Renderer2 } from '@angular/core';
import {TodoComponent} from './../todo/todo.component';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterContentInit {
  @ContentChildren(TodoComponent, {read: ElementRef})
  private items: QueryList<ElementRef>;

  @Input()
  private pageSize = 2;
  private currentPage = 1;
  private itemsNum = 0;
  private totalPages = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this);
  }
  ngAfterContentInit() {
    this.items.changes.subscribe((value) => {
      this.updateGallery(this.items.toArray());
    })
  }

  public updateGallery (items: ElementRef[]) {
    this.itemsNum = items.length;
    this.totalPages = Math.ceil(this.itemsNum / this.pageSize);
    this.updateVisibility();
  }

  public updateVisibility () {
    this.items.toArray().forEach((item: ElementRef, index) => {
      if (
        (index + 1 > (this.currentPage - 1) * this.pageSize) &&
        (index + 1 <= this.currentPage * this.pageSize)
      ) {
        this.renderer.setStyle(item.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(item.nativeElement, 'display', 'none');
      }
    })
  }

  public scrollRight () {
    if (this.currentPage + 1 > this.totalPages) {
      console.log(this.totalPages);
      return;
    }
    this.currentPage ++;
    this.updateVisibility();
    console.log('right done');
  }

  public scrollLeft () {
    if (this.currentPage - 1 === 0) {
      return;
    }
    this.currentPage --;
    this.updateVisibility();
    console.log('left done');
  }

}
