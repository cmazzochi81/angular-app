import { Injectable } from '@angular/core';
//Headers and request options will be used when you create methods that will submit post requests, 
//when inserting articles and updating articles. 
import { Http, Headers, RequestOptions } from '@angular/http';
//The rxjs map operator that will be used on all of your API calls. 
import 'rxjs/add/operator/map';
import { Article } from './article';

@Injectable()
export class ArticleService {

  //creating a result of type any that will handle the response from your API. 
  result: any;

  constructor(private _http: Http) { }

  //READ ALL
  getArticles(){

    return this._http.get("/api/all")
      .map(result => this.result = result.json())
  }
  //READ ONE
  getArticle(id){

    return this._http.get("/api/articles/" + id)
      .map(result => this.result = result.json());
  }

  //CREATE
  insertArticle(post: Article) {
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/create', JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }

  //UPDATE
  updateArticle(post: Article, id) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/update/'+id, JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }

  //DELETE
  deleteArticle(id) {
    return this._http.get("/api/delete/"+id)
      .map(result => this.result = result.json());
  }






}
