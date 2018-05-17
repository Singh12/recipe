import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  color_change: any;
  constructor(private router: Router) {
    this.color_change = {bgcolor: false};
  }

  ngOnInit() {
  }
  addRecipeForm() {
   this.router.navigateByUrl('/addnewrecipe');
  }
  change_color() {
    const newvalue = !this.color_change.bgcolor;
    this.color_change = {bgcolor: newvalue};
    console.log(newvalue);
  }
}
