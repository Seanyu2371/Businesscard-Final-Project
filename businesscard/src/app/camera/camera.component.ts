import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Tesseract;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
    public constructor() {
        this.captures = [];
    }

    title = 'ocrAngular';
    Result = 'Recognizing...';
    print='...';

    ngOnInit() {
    }
      
      @ViewChild("video",{static: false})
      public video: ElementRef;
    
      @ViewChild("canvas",{static: false})
      public canvas: ElementRef;
    
      public captures: Array<any>;
    
    
      public ngAfterViewInit() {
          if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                  this.video.nativeElement.srcObject = stream
                  this.video.nativeElement.play();
              });
          }
      }
    
      public capture() {
          var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
          this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
          Tesseract.recognize(this.canvas.nativeElement.toDataURL("image/png")).then(function(result){         
            alert(result.text);    
            });   
      }
    
}

