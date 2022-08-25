import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  count : any = [];

   subscription1? : Subscription; 

  observer: Observer<any> = {
     next : (data:any)=>{
      this.count.push(data);
     },
     error:(err:any) => {
      console.log(err);
     },
     complete:() =>{ 
      console.log('child 1 observable completed');
     }
   }
  constructor(private appservice : AppService) { }

  ngOnInit(): void {

      this.subscription1 = this.appservice.Counter$.subscribe(this.observer);

      // this.appservice.Counter$.subscribe(data=>{
      //   console.log(data);
      // })
    
  }

  ngOnDestroy(): void {
    if(this.subscription1 != undefined){
      this.subscription1.unsubscribe();
    }
  }

}
