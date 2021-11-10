import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class ClienteService {
    private clientes: Cliente[] = [];
    private listaClientesAtualizada = new Subject<Cliente[]>();
    clienteService: any;

    onDelete(id: string): void {
        this.clienteService.removerCliente(id);
    }


    getClientes(): void {
        this.httpClient
            .get<{ mensagem: string, clientes: any }>('http://localhost:5939/api/clientes')
            .pipe(map((dados) => {
                return dados.clientes.map((cliente: { _id: any; nome: any; fone: any; email: any;senha:any;endereco:any;cidade:any;estado:any;bairro:any }) => {
                    return {
                        id: cliente._id,
                        nome: cliente.nome,
                        fone: cliente.fone,
                        email: cliente.email,
                        senha:cliente.senha,
                        endereco:cliente.endereco,
                        cidade:cliente.cidade,
                        estado:cliente.estado,
                        bairro:cliente.bairro
                        }
                })
            }))
            .subscribe(
                (clientes) => {
                    this.clientes = clientes;
                    this.listaClientesAtualizada.next([...this.clientes]);
                }
            )
    }

    constructor(private httpClient: HttpClient) {
    }

    adicionarCliente(nome: string, fone: string, email: string,senha: string,endereco:string,cidade:string,estado:string,bairro:string) {
        const cliente: Cliente = {
            id: '',
            nome: nome,
            fone: fone,
            email: email,
            senha: senha,
            endereco:endereco,
            cidade:cidade,
            estado:estado,
            bairro:bairro
            

        };
        this.httpClient.post<{ mensagem: string, id: string }>('http://localhost:5939/api/clientes',
            cliente).subscribe(
                (dados) => {
                    cliente.id = dados.id;
                    this.clientes.push(cliente);
                    this.listaClientesAtualizada.next([...this.clientes]);
                }
            )
    }

    getListaDeClientesAtualizadaObservable() {
        return this.listaClientesAtualizada.asObservable();
    }
    removerCliente(id: string): void {
        this.httpClient.delete(`http://localhost:5939/api/clientes/${id}`).subscribe(() => {
            this.clientes = this.clientes.filter((cli) => {
                return cli.id !== id
            });
            this.listaClientesAtualizada.next([...this.clientes]);
        });
    }
}