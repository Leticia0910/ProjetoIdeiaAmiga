import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
selector: 'app-cliente-inserir',
templateUrl: './cliente-inserir.component.html',
styleUrls: ['./cliente-inserir.component.css'],
})

export class ClienteInserirComponent {
constructor(public clienteService: ClienteService) {}
nome:string |undefined;
fone:string|undefined;
email:string|undefined;
senha:string|undefined;
endereco:string|undefined;
cidade:string|undefined;
estado:string|undefined;
bairro:string|undefined


onAdicionarCliente(form: NgForm) {
    if (form.invalid) {
    return;
    }
    this.clienteService.adicionarCliente(
    form.value.nome,
    form.value.fone,
    form.value.email,
    form.value.senha,
    form.value.endereco,
    form.value.cidade,
    form.value.estado,
    form.value.bairro,
	
    );
    form.resetForm();
    }
    
}
