import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 import { Router } from '@angular/router';
  import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();


  constructor(
     public router: Router,
     private location: Location,

  ) { }

  ngOnInit(): void {

  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();

  }
  navigateToPresentation(){

    const presentationElement  :any = document.getElementById('presentation');
    this.onSidenavClose()

       presentationElement.scrollIntoView({ behavior: 'smooth' });

}
navigateToFood(){
    const presentationElement  :any = document.getElementById('our-food');
    this.onSidenavClose()

       presentationElement.scrollIntoView({ behavior: 'smooth' });

}
navigateToPlan(){
    const presentationElement  :any = document.getElementById('plan');
    this.onSidenavClose()

       presentationElement.scrollIntoView({ behavior: 'smooth' });


 }
navigateToContact(){
    const presentationElement  :any = document.getElementById('contact');
    this.onSidenavClose()

       presentationElement.scrollIntoView({ behavior: 'smooth' });

}
}
