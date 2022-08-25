import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  count : any = []; 

  subscription3? : Subscription; 
  observer : Observer<any> = {
    next:(data:any)=>{
      this.count.push(data);
    },
    error:(err:any)=> {
      console.log(err);
    },
    complete:()=>{
      console.log('child 3 observer completed');
    }
  }


  constructor(private appservice : AppService) { }

  ngOnInit(): void {

    this.subscription3 = this.appservice.Counter$.subscribe(this.observer);
  
  }

  ngOnDestroy(): void {
    if(this.subscription3 != undefined){
      this.subscription3.unsubscribe();
    }
  }
}
