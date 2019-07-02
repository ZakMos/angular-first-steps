import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors=['Red', 'White', 'Yellow', 'Green', 'Black'];

  name='Zakaria Moslim';
  age = 43;
  source = 'https://picsum.photos/200/300';

  myFunction() {
      // console.log("click event");
      alert('Hello World');
  }

  onChange() {
    console.log("Colored Changed", this.colors);
  }
}
