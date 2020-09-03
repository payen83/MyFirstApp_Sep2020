import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.scss'],
})
export class ToolbarHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {
    this.title = null;
   }

  ngOnInit() {}

}
