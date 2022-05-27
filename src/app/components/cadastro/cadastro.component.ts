import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProdutosService } from 'src/app/services/produtos.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  readonly form = new FormGroup({
    categoria: new FormControl('alimentacao', [Validators.required]),
    produto: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required])
  })

  readonly valorInicial = {}

  constructor(private produtoService: ProdutosService) {
    this.valorInicial = this.form.value
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.form.invalid) {
      return
    }

    console.log(this.form.value)

    switch (this.form.get('categoria')?.value) {
      case 'alimentacao':
        this.produtoService.cadastraAlimento(this.form.value)
        break
      case 'limpeza':
        this.produtoService.cadastrarLimpeza(this.form.value)
        break
      default:
        console.error('Categoria inválida!')
        break
    }

    this.form.patchValue(this.valorInicial)
    this.form.markAsUntouched()
  }
}
