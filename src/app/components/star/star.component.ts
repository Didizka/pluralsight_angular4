import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating;
  starWidth;
  @Output() ratingClicked = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit('The rating ' + this.rating + '  was clicked');
  }

}
