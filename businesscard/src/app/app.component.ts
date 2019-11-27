import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService) {
    // this.captures = [];
  }
  ngOnInit() {
    this.authService.autoLogin();
  }

}
