import { Component, OnInit } from '@angular/core';
import { getStorage } from 'src/app/utils/storage.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    if (getStorage('pokemon-trainer'))
      return true;
    else
      return false;
  }

  logoutClicked(): void {
    if (getStorage('pokemon-trainer'))
      localStorage.removeItem('pokemon-trainer')
    if (getStorage('user-collection'))
      localStorage.removeItem('user-collection')

      this.router.navigate(['/login'])
  }
}
