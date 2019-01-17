import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { navItems } from '../_nav';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { MatDrawer } from '@angular/material';
import { GlobalService } from '../common/global';
@Component({
  selector: 'app-modules',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexLayoutComponent implements OnInit {
  @ViewChild('drawer')
  drawer: MatDrawer;
  links = [{ 'name': 'home', 'icon': 'home', 'path': '/' },
  { 'name': '', 'icon': 'person', 'path': '/dp' },
  { 'name': '', 'icon': 'local_play', 'path': '/jtmv' },
  { 'name': '', 'icon': 'bar_chart', 'path': '/leaderboard' }];
  activeLink = this.links[0];
  background = '';
  islogin = false;
  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  userdetail:any;
  menu: any = {
    id: '',
    roleid: '',
    menuid: '',
    active: '',

  }
  username: any = 'unnamed';
  env = {};
  shortcuts: any = [];
  public navItems = null;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private router: Router, public global:GlobalService) {
    this.env = environment;


    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {
    this.userdetail= this.global.getuser();
    localStorage.setItem('', '');




   this.getFavmenu();
   this.global.drawer = this.drawer;

  }

  callUrl(lnk){
    this.activeLink = lnk; 
      if(lnk.name === 'home'){
        this.global.isRider();
      }else{
        this.router.navigate([lnk.path]);
      }
  }

  
  // saveMenu()
  // {
  //   this.favmenu.postFavmenu({
  //     "id": this.menu.id,

  //     "userid": this.global.getUser().id,

  //     "active":this.,
  //   })
  // }
  getFavmenu() {

  }


  logout() {
    // this.env.isAuthenticated = false;
    this.global.clearuser();
    this.router.navigateByUrl('/');
  }
}
