import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(180deg)'})),
      transition('default <=> rotated', animate('250ms'))
    ])
  ]
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string;
  showBody = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.showBody = !this.showBody;
  }

}
