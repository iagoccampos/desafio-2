import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

interface Usuario {
  email: string
  senha: string
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private readonly usuarios: Usuario[] = [{ email: 'iago@abc', senha: '123' }]

  private usuarioAtual: Usuario | null = null

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    const user = this.usuarios.find((el) => { return el.email === usuario.email && el.senha === usuario.senha })

    if (user) {
      this.usuarioAtual = user
      return true
    }

    return false
  }

  logoff() {
    this.usuarioAtual = null
    this.router.navigate(['login'])
  }

  usuarioLogado() {
    return !!this.usuarioAtual
  }

  usuarioEmail() {
    return this.usuarioAtual?.email
  }

  cadastrar(usuario: Usuario) {
    this.usuarios.push(usuario)
  }
}
