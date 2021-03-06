import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {StorageService} from '../../@core/services/storage.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage {
  form: FormGroup;
  users = [
    {
      name: 'employee'
    },
    {
      name: 'recruit'
    },
    {
      name: 'manager'
    },
    {
      name: 'supplier'
    }
  ];

  constructor(private router: Router,
              private storageSvc: StorageService,
              private authSvc: AuthService) {
    this.form = new FormGroup({
      identifier: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]),
      password: new FormControl('zouleyuan', [Validators.required])
    });
  }

  login() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return false;
    }
    this.authSvc.login(this.form.value).subscribe(res => {
      // 设置用户Token信息
      this.authSvc.updateLoginStatus(res);
      this.router.navigate(['/admin/dashboard']);

    });

  }

}
