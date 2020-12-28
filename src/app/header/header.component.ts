import { Component, EventEmitter, Output } from '@angular/core';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() userSelected = new EventEmitter<string>();

    onSelect(user : string) {
        this.userSelected.emit(user);
    }
}