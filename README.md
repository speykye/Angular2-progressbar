# ng2-progressbar-from-ng2-bootstrap

first import the ProgressbarModule in the app.module.ts.

    import { ProgressbarModule } from 'ngx-bootstrap/progressbar'
    @NgModule({
      imports: [
         BrowserModule,
         FormsModule,
         HttpModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        ProgressbarModule.forRoot()
      ],
      ...
    })
And then,import the ProgressbarConfig in the app.component.ts.
    
      import { Component, ViewChild, ViewChildren, QueryList, Input, OnInit } from '@angular/core';
      import { ProgressbarConfig } from "ngx-bootstrap/progressbar";
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
  
Finally,add the progressbar in the app.component.html.
            
        <progressbar *ngIf="!state" class="progress-striped acitve" value="{{value}}" type="info"></progressbar>
