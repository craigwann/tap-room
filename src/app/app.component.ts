import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedKeg = null;

  masterListKeg: Keg[] = [
    new Keg('Coors', 'Light', 3.5, 124, 3),
    new Keg('Budweiser', 'Light', 3.3, 124, 2.5),
    new Keg('Dino', 'Tricerahops', 4.5, 124, 5),
    new Keg('Shasta', 'Soda Water', 0, 124, 1),
  ]



  editKeg(clickedKeg) {
    this.selectedKeg= clickedKeg;
  }


}
