import { Component, OnInit } from '@angular/core';
import Blog from "../blog";

@Component({
  selector: 'app-heroes',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Blog[];
  constructor() { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    // write service call
  }
}
