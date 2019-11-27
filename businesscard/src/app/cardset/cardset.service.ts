import { modelcard } from './modelcard';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class CardsetService{

    cardsChanged = new Subject<modelcard[]>();

    private bs:modelcard[] = [];

    // private bs:modelcard[] = [
    //     new modelcard('Sean', '237143058@qq.com', 'Enyayo', 'Manager Assistant'),
    //     new modelcard('Sally', 'cyu237143058@gmail.com', 'Depaul', 'Assistant')
    //  ];

    constructor(){}

    setBscards(newbs:modelcard[]){
        this.bs=newbs;
        this.cardsChanged.next(this.bs.slice());
    }

     getBscards(){
         return this.bs.slice();
         this.cardsChanged.next(this.bs.slice());
     }

     getBscard(index:number){
         return this.bs[index];
     }

     addBscard(bscard:modelcard){
        this.bs.push(bscard);
        this.cardsChanged.next(this.bs.slice());
     }

     updateBscard(index:number, newBscard:modelcard){
        this.bs[index] = newBscard;
        this.cardsChanged.next(this.bs.slice());
     }

     deleteBscard(index:number){
         this.bs.splice(index,1);
         this.cardsChanged.next(this.bs.slice());
     }
}