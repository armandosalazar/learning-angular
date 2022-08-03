import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() id!: number;
  @Input() count!: number;
  @Output() addToCount: EventEmitter<number> = new EventEmitter();
  @Output() subToCount: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickAdd(id: number): void {
    this.addToCount.emit(id);
  }
  onClickSub(id: number): void {
    this.subToCount.emit(id);
  }
}
