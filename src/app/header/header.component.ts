import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  onSelect(action: string) {
    console.log(`action: ${action}`);
    this.featureSelected.emit(action);
  }
}
