## 🚀 TypeScript - Projeto Completo com Boas Práticas e Arquitetura

Este projeto demonstra a construção de uma aplicação utilizando TypeScript, evoluindo desde a configuração inicial até a aplicação de conceitos avançados como POO, generics, decorators, imutabilidade e programação defensiva.

💡 O foco deste repositório é mostrar a evolução real do desenvolvimento através de commits, simulando um ambiente profissional.

## 📌 Sobre o projeto

A aplicação simula um sistema de negociações, permitindo:

Cadastro de negociações
Listagem dinâmica em tela
Importação de dados de API externa
Validação e tratamento de dados
Aplicação de regras de negócio

## 🧠 Principais conceitos aplicados
### 🧩 Orientação a Objetos
- Encapsulamento
- Herança
- Polimorfismo
- Abstração com classes abstratas
- Interfaces e contratos

### ⚡ TypeScript avançado
- Tipagem forte (remoção de any)
- strictNullChecks
- Generics
- Enums (DiasDaSemana)
- Métodos estáticos
- Modificadores de acesso (private, readonly)

### 🛡️ Programação defensiva

O projeto aplica práticas para aumentar a segurança e evitar erros:

- Validação de valores null e undefined
- Prevenção de erros em runtime
- Código defensivo em métodos críticos
- Sanitização de dados (escape de script)

### 🔒 Imutabilidade e integridade de dados
- Uso de ReadonlyArray
- Retorno de cópias da lista ao invés da original
- Bloqueio de alterações externas
- Garantia de consistência dos dados

### 🎯 Arquitetura (MVC)

Organização baseada em Model-View-Controller:

- Model → Regras de negócio (Negociacao, Negociacoes)
- View → Renderização e atualização da interface
- Controller → Integração entre Model e View

### 🧪 Funcionalidades
### 📊 Manipulação de dados
- Adição de negociações
- Listagem dinâmica
- Bloqueio de registros duplicados
- Validação de dias úteis

### 🌐 Integração com API
- Consumo de API externa
- Service para obter negociações do dia

### 🧼 Qualidade de código
- Refatoração contínua
- Remoção de code smells
- Tipagem completa
- Simplificação de classes e construtores

### 🎨 Recursos avançados
### 🧠 Decorators
- Log de execução (inspect)
- Medição de performance
- Escape de dados (segurança)
- Injeção de dependência (DOM Injector)

### 🔁 Generics e Interfaces
- Interface Comparavel<T>
- Interface Modelo extendendo outras interfaces
- Reutilização de código com tipagem genérica

### 🧬 Polimorfismo
- Classe abstrata com método imprimir
- Compartilhamento de comportamento entre classes

### ⚙️ Configurações
- tsconfig.json configurado com:
- strictNullChecks
- noEmitOnError
- sourceMap (debug)
- Auto-compilação do TypeScript <br/>

📂 Estrutura do projeto <br/>
📦 typescript_projeto_inicial <br/>
 ┣ 📂 src <br/>
 ┃ ┣ 📂 controllers <br/>
 ┃ ┣ 📂 models <br/>
 ┃ ┣ 📂 views <br/>
 ┃ ┣ 📂 services <br/>
 ┃ ┗ 📂 decorators <br/>
 ┣ 📂 dist <br/>
 ┣ 📜 tsconfig.json <br/>
 ┣ 📜 package.json <br/>
 ┗ 📜 README.md <br/>
 
### ⚙️ Como executar
### Clonar repositório
git clone https://github.com/FilipeASSouza/typescript_projeto_inicial.git

### Acessar pasta
cd typescript_projeto_inicial

### Instalar dependências
npm install

### Compilar
npx tsc

### Executar
node dist/index.js

### 📈 Evolução do projeto
### 🔰 Início
- Configuração do TypeScript no Node.js
- Criação das primeiras classes

### 🧱 Estruturação
- Integração com formulário
- Criação dos models
- Tipagem completa

### 🛡️ Segurança
- Programação defensiva
- Imutabilidade com ReadonlyArray

### ⚙️ Evolução técnica
- Generics, interfaces e abstração
- Integração com API

### 🚀 Avançado
- Decorators
- Injeção de dependência
- Debug com sourceMap
- Refatorações finais

### 🚧 Próximos passos
- Testes automatizados
- Integração com backend
- Persistência em banco de dados
- Deploy em cloud

### 👨‍💻 Autor

Desenvolvido por Filipe Souza

### 💡 Observação

Este projeto demonstra não apenas o resultado final, mas a evolução de um sistema com foco em:

- Qualidade de código
- Boas práticas
- Arquitetura
- Manutenibilidade
