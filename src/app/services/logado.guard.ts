import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AutenticacaoService } from './autenticacao.service'

@Injectable({
  providedIn: 'root'
})
export class LogadoGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const logado = this.autenticacaoService.usuarioLogado()

    if (logado) {
      return true
    }

    this.router.navigate(['login'])
    return false
  }

}
