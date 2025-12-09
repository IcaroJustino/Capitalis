// login.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastrModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  isPasswordVisible: boolean = false;

  loginForm!: FormGroup;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onsubmit(): void {
    if (!this.loginForm.valid) {
      this.toastr.warning('Por favor, preencha todos os campos corretamente.', 'Dados Incompletos');
      console.log('Hello?');
      return;
    }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    if (!(email === 'admin@email.com' && password === '123456')) {
      this.toastr.error('E-mail ou senha inválidos. Tente novamente.', 'Acesso Negado');
      return;
    }
    this.toastr.success('Login efetuado com sucesso!', 'Bem-vindo(a)!');
    this.router.navigate(['/dashboard']);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
