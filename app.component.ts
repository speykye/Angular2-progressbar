import { Component, ViewChild, ViewChildren, QueryList, Input, OnInit } from '@angular/core';
import { ProgressbarConfig } from "ngx-bootstrap/progressbar";
// import { ShapeOptions, LineProgressComponent, CircleProgressComponent, SemiCircleProgressComponent } from 'angular2-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() value = 0;
  @Input() msTime = 30;
  public state : boolean;
  // @ViewChild(LineProgressComponent) lineComp: LineProgressComponent;
  public title: string = '云耕科技后台管理系统';

  constructor(public config: ProgressbarConfig){
    config.max = 100;
    config.animate = true;
    this.dynamicChange();
  }
  // private lineOptions: ShapeOptions = {
  //   strokeWidth: 0.3,
  //   easing: 'easeInOut',
  //   duration: 2000,
  //   color: '#66B3FF',
  //   trailColor: '#eee',
  //   svgStyle: { width: '100%' },
  // };
  changeToIndex(){
     this.title = '云耕科技后台管理系统';
  }
  changeTitle(){
    this.title="耕耘网";
  }
  // ngAfterViewInit() {
  //     this.lineComp.animate(1);
  // }
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
