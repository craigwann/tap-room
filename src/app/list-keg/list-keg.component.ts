import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'


@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css']
})

export class ListKegComponent  {
  @Input() childListKeg: Keg[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourDrink(currentKeg) {
    currentKeg.capacity -=1
  }


}
