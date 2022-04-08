import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'card-service';
  block: {
    id: number;
    num: number;
  }[] = [];
  setBlock = () => {
    const num = Math.ceil(Math.random() * 100000);
    const id = Math.ceil(Math.random() * 10);
    this.block.push({
      id: num,
      num: id,
    });
  };

  sortCard = () => {
    [
      ...this.block.sort((a, b) => {
        return a.num - b.num;
      }),
    ];
  };

  deleteCard = (id: number) => {
    this.block=[...this.block.filter((d) => d.id !== id)];
  };
}
