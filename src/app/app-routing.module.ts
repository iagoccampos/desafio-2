import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './components/cadastro/cadastro.component'
import { CarrinhoComponent } from './components/carrinho/carrinho.component'
import { ProductsComponent } from './components/products/products.component'

const routes: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '**', redirectTo: 'produtos' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
