import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { navItems } from '../_nav';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
@Component({
  selector: 'app-modules',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexLayoutComponent implements OnInit {

  links = [{ 'name': '', 'icon': 'home', 'path': '/' },
  { 'name': '', 'icon': 'person', 'path': '/dp' },
  { 'name': '', 'icon': 'local_play', 'path': '/jtmv' },
  { 'name': '', 'icon': 'bar_chart', 'path': '/leaderboard' }];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }


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
  constructor(private router: Router) {
    this.env = environment;


    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {


    localStorage.setItem('', '');




    this.getFavmenu();
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
    this.router.navigateByUrl('/login');
  }
}
