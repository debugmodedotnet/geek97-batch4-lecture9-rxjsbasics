import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxJS Demo';


  constructor(private vcr : ViewContainerRef){

  }

  async loadChild2(){

    const {Child2Component} = await import('./child2/child2.component');
    this.vcr.createComponent(Child2Component);

  }

  async loadChild3(){
    const {Child3Component} = await import('./child3/child3.component');
    this.vcr.createComponent(Child3Component);
  }
}
