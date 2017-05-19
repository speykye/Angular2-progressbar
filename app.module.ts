import { ProgressbarModule } from 'ngx-bootstrap/progressbar'
@NgModule({
  imports: [
    ProgressbarModule.forRoot()
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
