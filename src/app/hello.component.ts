import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div contenteditable="true">Hello {{name}}!</div>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name: string;
}
