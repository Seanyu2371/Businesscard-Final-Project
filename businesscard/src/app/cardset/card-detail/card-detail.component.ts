import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { modelcard } from '../modelcard';
import { CardsetService } from '../cardset.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  bscard:modelcard;
  id:number;


  constructor(private service: CardsetService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.bscard = this.service.getBscard(this.id);
          }
        );
    }

    onEditBscard() {
      this.router.navigate(['edit'], {relativeTo: this.route});
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

    onDeleteBscard(){
      this.service.deleteBscard(this.id);
      this.router.navigate(['/cardset']);
    }

}
