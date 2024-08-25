# Simplauth

O **Simplauth** é uma aplicação de autenticação que oferece login com e-mail e senha, bem como login social com Google e Apple. A aplicação inclui páginas de login, registro e perfil do usuário.

![Imagem da interface da api Simplauth](./capa.png)
Design feito no [Figma](https://www.figma.com/design/VVJ96xRXhLDbD4WCvJuD8F/Simplauth?node-id=7122-1491&t=oXiycgmYNjyXpqiQ-1)

## Requisitos

### Requisitos Funcionais

#### Página de Login

- **Login com E-mail e Senha:**
  - Formulário com campos de e-mail e senha.
  - Validação de campos obrigatórios.
  - Botão de login para autenticação.
  - Opção para "Esqueci minha senha", redirecionando para recuperação de senha.
  - Opção para "Registrar-se", redirecionando para cadastro na plataforma.
- **Login com Google:**
  - Integração com OAuth 2.0 do Google para autenticação.
- **Login com Apple:**
  - Integração com Sign in with Apple para autenticação.
- **Mensagens de Erro:**
  - Exibição de mensagens para credenciais inválidas ou outros problemas durante o login.

#### Página de Registro

- **Formulário de Registro:**
  - Campos para e-mail, senha, confirmação de senha, nome, telefone e profissão do usuário.
  - Validação de senha forte e correspondência de confirmação de senha.
  - Botão para submeter o formulário e criar uma nova conta.
- **Registro com Google:**
  - Integração com OAuth 2.0 do Google para registro.
- **Registro com Apple:**
  - Integração com Sign in with Apple para registro.
- **Verificação de E-mail:**
  - Envio de e-mail de verificação após o registro.
  - Link de confirmação no e-mail para ativar a conta.

#### Página de Perfil

- **Exibição de Dados do Usuário:**
  - Visualização do nome, e-mail, telefone, profissão e foto do perfil.
- **Edição de Perfil:**
  - Opção para editar informações do perfil, como nome, telefone, profissão e foto.
  - Alteração de senha com verificação da senha antiga.
- **Logout:**
  - Botão de logout para encerrar a sessão do usuário.

### Requisitos Não-Funcionais

- **Segurança:**
  - Armazenamento de senhas usando hashing seguro (bcrypt).
  - Implementação de autenticação JWT (JSON Web Token) para manter a sessão do usuário.
- **Desempenho:**
  - Resposta rápida da API, garantindo a autenticação eficiente dos usuários.
- **Usabilidade:**
  - Interface de usuário intuitiva e responsiva, adaptável a dispositivos móveis.
  - Feedback claro para ações do usuário, como login, registro e edição de perfil.
- **Manutenibilidade:**
  - Código bem organizado e documentado, facilitando futuras manutenções e atualizações.
- **Escalabilidade:**
  - Estrutura preparada para aumento do número de usuários e requisições.

## 🛠️ Construído com

- [TypeScript](https://www.typescriptlang.org/docs/) - Linguagem de Programação
- [NestJS](https://docs.nestjs.com/) - Framework para Aplicações Backend Node.js
- [Next.js](https://nextjs.org/docs) - Framework React para Aplicações Web
- [Sqlite](https://www.sqlite.org/) - Banco de Dados Relacional
- [Prisma](https://www.prisma.io/docs) - ORM para Node.js
- [Tailwind CSS](https://tailwindcss.com/docs/) - Biblioteca de Estilização

## Tecnologias

### Backend (NestJS)

#### Essenciais

- **Framework:** NestJS
- **Autenticação:** Passport.js com estratégias JWT, Google e Apple OAuth
- **Banco de Dados:** Sqlite com Prisma ORM
- **Variáveis de Ambiente:** Configuração com dotenv

#### Ferramentas e Bibliotecas

- **Sistema de Testes:** Jest para testes unitários e E2E
- **Validação de Dados:** Class-validator e Zod
- **Documentação:** Swagger para documentação da API
- **Hashing de Senhas:** bcrypt para segurança de senhas

### Frontend (Next.js)

#### Essenciais

- **Framework:** Next.js
- **Estilização:** Tailwind CSS
- **Autenticação:** Redux
- **Roteamento:** Roteamento nativo do Next.js

### Database (Sqlite)

#### Essenciais

- **ORM:** Prisma para manipulação de dados
- **Migrations:** Prisma Migrate para controle de versões do banco de dados
