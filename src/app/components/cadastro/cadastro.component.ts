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
    tipo: new FormControl('alimentacao', [Validators.required]),
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

    this.produtoService.cadastraProduto(this.form.value)

    this.form.patchValue(this.valorInicial)
    this.form.markAsUntouched()
  }
}
