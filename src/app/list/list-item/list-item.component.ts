import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() character: any;
  constructor(private router: Router) {}
  
  showInfo(item: any) {
    this.router.navigate(['/character'], {state: { ...item}});
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy() {
    // this.dataService.character = this.character; 
 }
}
