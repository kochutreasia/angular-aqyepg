import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css'],
})
export class InvertedChildComponent implements OnInit {
  @Output() emittedData = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {}
  onClick(event: string) {
    this.emittedData.emit(event);
  }
}
