import { Component, OnInit, Input} from '@angular/core';
import { modelcard } from '../../modelcard';
import { CameraComponent } from 'src/app/camera/camera.component';


@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.css']
})
export class BusinesscardComponent implements OnInit {

  camera:CameraComponent;

  @Input() bscard:modelcard;
  @Input() index:number;
  photo:Array<any>;

  ngOnInit() {
    this.photo=this.camera.captures;
  }

}
