import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

// Biblioteca class-validator

export class Usuario {
  id: number;
  @Expose({
    name: 'username'
  })
  @IsNomeDeUsuarioUnico({
    message: 'nome de usuario precisa ser unico'
  })
  @IsNotEmpty({
    message: 'nome de usuario nao pode estar vazio'
  })
  @IsString({
    message: 'usuario deve ser uma string'
  })
  nomeDeUsuario: string;

  @Expose({
    name: 'email'
  })
  @IsNotEmpty({
    message: 'email é obrigatorio'
  })
  @IsEmail({}, {
    message: 'email precisa ser um endereço de email valido'
  })
  email: string;

  @Expose({
    name: 'password'
  })
  @Exclude({
    toPlainOnly: true
  })
  @IsNotEmpty({
    message:'senha não pode ser vazia'
  })
   senha: string;

  @Expose({
    name: 'fullName'
  })
  @IsNotEmpty({
    message: 'nomeCompleto é obrigatório' // mensagem caso o usuario nao coloque o nome completo
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate'
  })
  dataDeEntrada: Date;
}