import { Component, Output, EventEmitter } from '@angular/core';
import {Painting} from './painting';

@Component({
  selector: 'painting-details',
  templateUrl: 'partials/paintingdetails.html',
  inputs: ['painting'],
  styleUrls: ['css/search-details.css']
})

export class PaintingDetailsComponent{
	@Output() onHide = new EventEmitter();
	isHidden: boolean;
	constructor(){
		this.isHidden = true;
	}
	onClick(): void{
	console.log('button clicked yo');
	this.isHidden = !this.isHidden;
	this.onHide.emit();
	}

}
