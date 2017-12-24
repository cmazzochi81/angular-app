import { Component } from '@angular/core';
import {Painting} from './painting';

@Component({
  selector: 'painting-details',
  templateUrl: 'partials/paintingdetails.html',
  inputs: ['painting'],
  styleUrls: ['css/search-details.css']
})

export class PaintingDetailsComponent{}
