import { Component, ViewChild, ViewChildren, QueryList, Input, OnInit } from '@angular/core';
import { ProgressbarConfig } from "ngx-bootstrap/progressbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() value = 0;
  @Input() msTime = 30;
  public state : boolean;

  constructor(public config: ProgressbarConfig){
    config.max = 100;
    config.animate = true;
    this.dynamicChange();
  }

  ngOnInit(){
    setInterval(() => this.dynamicChange(), this.msTime);
  }

  dynamicChange(){
    this.value += 1;
    if (this.value >= 100) {
      this.value = 100;
      this.state = true;
    }else{
      this.state = false;
    }
  }
  
}
