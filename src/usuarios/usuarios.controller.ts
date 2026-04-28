import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUserDto: any) {
    return this.usuariosService.createUser(createUserDto);
  }
  
  // Opcional: listar usuários para teste (Cuidado com a senha no retorno!)
  @Get()
  async findAll() {
    return this.usuariosService.findAll(); 
  }

  @Get('setup-admin') // Você pode acessar via navegador: localhost:3000/usuarios/setup-admin
  async setupAdmin() {
    const adminData = {
      NOME: 'Administrador',
      CPF_CNPJ: '04318259048',
      password: 'adm', // A senha que você vai digitar no login
      ID_PESSOA: 1, // ATENÇÃO: Esse ID_PESSOA deve existir na tabela PESSOAS!
      ATIVO: 1
    };

    try {
      const novoAdmin = await this.usuariosService.createUser(adminData);
      return { message: 'Admin criado com sucesso!', user: novoAdmin };
    } catch (error) {
      return { message: 'Erro ao criar admin. Verifique se o CPF já existe ou se a FK ID_PESSOA é válida.', error: error.message };
    }
  }
  
}