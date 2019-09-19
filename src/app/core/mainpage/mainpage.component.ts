import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  pages = [
    {"number": "Page 1"}
]

  constructor() { }

  ngOnInit() {
  }

  addPage(){
    this.pages.push({"number": "Page " + (this.pages.length + 1)})
  }
  deletePage(number: string){
    this.pages.splice(this.pages.findIndex( (page)  =>  page.number === number ), 1 );

  }
}
