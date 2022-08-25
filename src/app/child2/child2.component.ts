import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {

  count : any = []; 

  subscription2? : Subscription; 
  observer : Observer<any> = {
    next:(data:any)=>{
      this.count.push(data);
    },
    error:(err:any)=> {
      console.log(err);
    },
    complete:()=>{
      console.log('child 2 observer completed');
    }
  }


  constructor(private appservice : AppService) { }

  ngOnInit(): void {

    this.subscription2 = this.appservice.Counter$.subscribe(this.observer);
  }

  ngOnDestroy(): void {
    if(this.subscription2 != undefined){
      this.subscription2.unsubscribe();
    }
  }
}
