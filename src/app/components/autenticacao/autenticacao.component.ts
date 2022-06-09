import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AutenticacaoService } from 'src/app/services/autenticacao.service'

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent {

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  })

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  cadastrar() {
    if (this.form.invalid) {
      this.form.markAsTouched()
      return
    }

    this.autenticacaoService.cadastrar(this.form.value)
  }

  login() {
    if (this.form.invalid) {
      this.form.markAsTouched()
      return
    }

    const logou = this.autenticacaoService.login(this.form.value)

    if (logou) {
      this.router.navigate(['produtos'])
    }
  }
}
