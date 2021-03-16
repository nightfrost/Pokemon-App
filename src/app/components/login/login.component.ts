import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setStorage } from 'src/app/utils/storage.utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '' as string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('pokemon-trainer')) {
      this.router.navigate(['/pokemons']);
    }
  }

  onLoginButtonClicked() {
    if(this.username.length>1){
      this.router.navigateByUrl('/pokemons');
      setStorage('pokemon-trainer', this.username)
    }else{
      window.alert("You must enter at least two characters");
    }
    
  }

}
