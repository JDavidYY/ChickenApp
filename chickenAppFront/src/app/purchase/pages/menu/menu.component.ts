import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from '../../dialogos/change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  goShoppingCart():void
  {
    this.router.navigate(['/purchase/shopping-cart']);
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.clear();
    }
  
  changePassword(){
    this.dialog.open(ChangePasswordComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'custom-dialog-container' });
  }
  
  changeData(){
    
  }
}
