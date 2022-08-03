import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  counts!: number[];

  constructor() {}

  ngOnInit(): void {
    this.counts = [1, 2, 3];
  }

  onAddToCount(id: number): void {
    this.counts[id]++;
  }

  onSubToCount(id: number): void {
    this.counts[id]--;
  }
}
