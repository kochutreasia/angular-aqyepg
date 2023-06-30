import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentTxt: string = '';
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {}
  onClick(event: string) {
    this.parentTxt = event;
  }
}
