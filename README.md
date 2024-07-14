# TruckMe 

## Resumo
Criação de página web para a TruckMe, utilizando o framework Vue.js. Etruturando e componentizando para facilitar a manutenção e a escalabilidade. 
A componentização do projeto permite um desenvolvimento mais organizado e reutilizável. Implementamos diversas funcionalidades, incluindo um menu hamburguer para dispositivos móveis, 
validação de formulários, mensagens de sucesso após submissões, uma galeria de imagens interativa, um footer, etc. Além disso foi projetado para ser um design clean, one peage, de facil navegação, e com responsividade, na paleta de cores da empresa
e algumas imagens de exemplo criadas.
Abaixo, detalhamos todas as bibliotecas, frameworks, alterações e mudanças realizadas durante o desenvolvimento.

## Instruções sobre Como Executar e Instalar o Projeto
### Pré-requisitos
- Node.js (versão 12 ou superior)
- npm (versão 6 ou superior) ou yarn
- Vue3
## Instalação
### Clone o repositório:
```
git clone https://github.com/hugoh92/truckme-onepage.git
cd truckme-onepage
```
### Instale as dependências:
```
npm install
# ou
yarn install
```
## Executar do Projeto
### Para executar o projeto em um ambiente de desenvolvimento, use o seguinte comando:
```
npm run serve
# ou
yarn serve
```
 Abra o navegador e acesse http://localhost:8080 para ver a aplicação em execução.

## Pacotes Utilizados
- vue: Framework JavaScript utilizado para a construção da interface.
- prettier: Ferramenta de formatação de código.
- pretty-quick: Ferramenta para executar o Prettier em arquivos modificados antes de cada commit.
- jest: pacote para realizar testes.

## Execução dos Testes
### Para executar todos os testes unitários, utilize o seguinte comando
```
npm run __test__
# ou
yarn __test__
```
### Para verificar se o código está formatado corretamente sem fazer alterações, use
```
npm run prettier:check
# ou
yarn prettier:check
```
### Para corrigir automaticamente os problemas encontrados pelo Prettier, use
```
npm run prettier
# ou
yarn prettier
```
## Melhorias feitas
- Menu Hamburguer: Implementação de um menu hamburguer para dispositivos móveis.
- Galeria de Imagens: Adicionada navegação automática e manual para a galeria de imagens.
- Mensagens de Sucesso: Implementação de mensagens de sucesso ao enviar o formulário de contato.
- Responsividade: Melhorias na responsividade do design, incluindo fontes maiores para títulos nas seções.
- Header Fixo: Mantém o header fixo no topo da página durante a rolagem.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
