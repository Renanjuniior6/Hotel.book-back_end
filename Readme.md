# 🏤 Hotel.book | API
### API do projeto Hotel.book criado na estrutura MVC com utilização do banco de dados PostgreSQL

## 🔧 Funcionalidades
- Comunicação com o front end, enviando os dados armazenados
- Autenticação de usuário com email, senha, admin e token
- Tratamento de dados
- Upload de fotos
- Comunicação com o banco de dados (PostgreSQL)
- Rotas privadas
- Rota de criação de hotéis
- Rota de criação de usuário
- Rota de Login
- Rota de criação da cidade do hotel
- Rota de update do hotel selecionado
- Rota de delete do hotel selecionada
- Rota de update de cidade
- Rota de delete de cidade

## ✅ Tecnologias utilizadas
- [X] Node
- [X] Express
- [X] Cors
- [X] Nodemon
- [X] JsonWebToken
- [X] PostgreSQL
- [X] Sequelize
- [X] Uuid
- [X] Bcrypt
- [X] Multer

## 💻 Como rodar
```bash
# Clone este respositório
$ git clone [URL]

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn dev

# A aplicação será iniciada na porta 3001, acesse a rota base pelo navegador: http://localhost:3001
```
## ❗ Observações 
- Sempre declarar a extensão do arquivo nas importações
```javascript
import User from './User.js'
// Atente-se de colocar o '.js' no final se não o Node não reconhece
```
## ▶ Próximos passos 
- Criação de novas migrations
