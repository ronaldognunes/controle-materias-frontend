import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './model/usuario';
import { ContaService } from './Service/conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  loginForm!: FormGroup;
  usuario!: Usuario;
  erros: any[] = [];

  constructor(private router: Router,
    private fb: FormBuilder,
    private contaService: ContaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  efetuarLogin() {
    if (this.loginForm?.dirty && this.loginForm?.valid) {
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);
      this.contaService.login(this.usuario)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        )
        ;
    }
  }

  processarSucesso(response: any) {
    this.loginForm.reset();
    this.contaService.localStorage.salvarDadosUsuario(response);
    this.router.navigate(['/principal']);
  }

  processarFalha(response: any) {
    this.erros = response.error.mensagensDeErros;
    this.loginForm.reset();
    this.toastr.error('Usuario ou senha não existe :(', 'Ops!');
  }




}
