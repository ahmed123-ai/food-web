import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor(
    public router :Router,

    ) { }
  @Output() public sidenavToggle = new EventEmitter();

  ngOnInit(): void {



  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }
  navigateToPresentation(){
    const presentationElement  :any = document.getElementById('presentation');
       presentationElement.scrollIntoView({ behavior: 'smooth' });


}
navigateToFood(){
    const presentationElement  :any = document.getElementById('our-food');
       presentationElement.scrollIntoView({ behavior: 'smooth' });


}
navigateToPlan(){
    const presentationElement  :any = document.getElementById('plan');
       presentationElement.scrollIntoView({ behavior: 'smooth' });


}
navigateToContact(){
    const presentationElement  :any = document.getElementById('contact');
       presentationElement.scrollIntoView({ behavior: 'smooth' });


}
}
