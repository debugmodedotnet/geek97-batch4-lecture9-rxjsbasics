
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  count = 0; 
   //Counter$ : Observable<any>; 
  //  Counter$ : Subject<any>; 
  // Counter$ : BehaviorSubject<any>; 
  // Counter$ : ReplaySubject<any>; 
  Counter$ : AsyncSubject<any>;

  constructor() { 

    // observable 

    // this.Counter$ = new Observable<any>((subscriber:any)=>{
    //   let count = 0; 
    //   setInterval(()=>{
    //     count = count + 1; 
    //     if(count >= 10){
    //        subscriber.complete();
    //     }
    //     else {
    //       subscriber.next(count);
    //     }
    //   },1000)
    // })


    // // Subject 
    // this.Counter$ = new Subject<any>();
    // setInterval(()=>{
    //   this.count = this.count + 1; 
    //   if(this.count >= 10){
    //     this.Counter$.complete();
    //   }
    //   else {
    //     this.Counter$.next(this.count)
    //   }
    // },1000)


    //  // BehaviourSubject  
    //  this.Counter$ = new BehaviorSubject<any>(0);
    //  setInterval(()=>{
    //    this.count = this.count + 1; 
    //    if(this.count >= 10){
    //      this.Counter$.complete();
    //    }
    //    else {
    //      this.Counter$.next(this.count)
    //    }
    //  },5000)

    //  // ReplaySubject  
    //  this.Counter$ = new ReplaySubject<any>();
    //  setInterval(()=>{
    //    this.count = this.count + 1; 
    //    if(this.count >= 10){
    //      this.Counter$.complete();
    //    }
    //    else {
    //      this.Counter$.next(this.count)
    //    }
    //  },2000)



     // ReplaySubject  
     this.Counter$ = new AsyncSubject<any>();
     setInterval(()=>{
       this.count = this.count + 1; 
       if(this.count >= 10){
         this.Counter$.complete();
       }
       else {
         this.Counter$.next(this.count)
       }
     },500)

  }
}


