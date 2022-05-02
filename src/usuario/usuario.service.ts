import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [{
    id: 1,
    nomeDeUsuario: 'erickfernando',
    email: 'erickfernand0@hotmail.com',
    senha: 'erick123',
    nomeCompleto: 'erick fernando',
    dataDeEntrada: new Date()
  }]

    public cria(usuario: Usuario): Usuario{
      this.usuarios.push(usuario)
      return usuario
    }

    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
      const usuarioEncontrado = this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario)

      return usuarioEncontrado
    }
}