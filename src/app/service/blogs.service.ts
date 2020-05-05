import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import Blog from "../blog";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor() { }

  getBlogs():Observable<Blog[]>{
    return null;
    // todo: write service calling code here
  }
}
