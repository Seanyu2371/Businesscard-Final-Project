import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardsetService } from '../cardset.service';


@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})
export class CardUpdateComponent implements OnInit {

  editMode=false;
  id:number;
  cardForm:FormGroup;

  constructor(private route: ActivatedRoute,
              private service:CardsetService,
              private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit(){
    if(this.editMode){
      this.service.updateBscard(this.id,this.cardForm.value);
    }
    else{
      this.service.addBscard(this.cardForm.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  private initForm(){
    let cardFirstname='';
    let cardLastname='';
    let cardEmail='';
    let cardCompany='';
    let cardTitle='';
    let cardPhone='';

    if(this.editMode){
      const bscard=this.service.getBscard(this.id);
      cardFirstname=bscard.firstname;
      cardLastname=bscard.lastname;
      cardEmail=bscard.email;
      cardCompany=bscard.company;
      cardTitle=bscard.title;
      cardPhone=bscard.phone;
    }

    this.cardForm = new FormGroup({
      'firstname':new FormControl(cardFirstname,Validators.required),
      'lastname':new FormControl(cardLastname,Validators.required),
      'email':new FormControl(cardEmail,Validators.required),
      'company':new FormControl(cardCompany,Validators.required),
      'title':new FormControl(cardTitle,Validators.required),
      'phone':new FormControl(cardPhone,Validators.required),
    });
  }

}
