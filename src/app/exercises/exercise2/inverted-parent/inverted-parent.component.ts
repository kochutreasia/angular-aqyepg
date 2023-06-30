import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css'],
})
export class InvertedParentComponent implements OnInit {
  dataFromChild: string = '';
  constructor() {}

  ngOnInit() {}
  dataRecieved(event: string) {
    this.dataFromChild = event;
  }
}
