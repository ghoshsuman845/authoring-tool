import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-pane',
  templateUrl: './editor-pane.component.html',
  styleUrls: ['./editor-pane.component.scss']
})
export class EditorPaneComponent implements OnInit {
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
