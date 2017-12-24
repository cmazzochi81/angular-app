import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Painting } from './painting';
import { PaintingItemComponent } from './painting-item.component';
import { PaintingDetailsComponent } from './painting-details.component';
//import { PaintingDatePipeExample } from './painting-date-pipe-example.component';
import { SearchPipe } from './search-pipe';

@Component({
  selector: 'app-search',
  templateUrl: './partials/search.component.html',
  styleUrls: ['./css/search.component.css']
})
export class SearchComponent{ //implements OnInit {
    paintings = PAINTINGS;
    currentPainting: Painting;

    showPainting(item) {
      this.currentPainting = item;
    }

//   constructor() { }

//   ngOnInit() { 
//   }
}

var PAINTINGS: Painting[] = [
  {
      "name": "Color Explosion",
      "shortname": "colorExplosion",
      "reknown": "Acrylic on Cardboard",
      "bio": "I couldn't get enough color."
  }, {
      "name": "Back Street Boys",
      "shortname": "backStreetBoys",
      "reknown": "Acrylic on Cardboard",
      "bio": "I wouldn't want to wander down some alley and find this crew..."
  }, {
      "name": "Arroz Con Pollo",
      "shortname": "arrozConPollo",
      "reknown": "Acrylic on Canvas",
      "bio": "This is Jean Michel Basquiat. I can only admire."
  }, {
      "name": "Stego Starus",
      "shortname": "stegoStarus",
      "reknown": "Acrylic on Cardboard",
      "bio": "This was one of my favorite dinos when I was a kid."
  }, {
      "name": "Two Nobodys",
      "shortname": "twoNobodys",
      "reknown": "Acrylic on Canvas",
      "bio": "These two the best of friends. "
  }, {
      "name": "Number One",
      "shortname": "numberOne",
      "reknown": "Acrylic on Cardboard",
      "bio": "I will always have a special place reserved for this one."
  },
  {
      "name": "Couch Fun",
      "shortname": "couchFun",
      "reknown": "Acrylic on Cardboard",
      "bio": "I consider this my best I guess."
  }
]
