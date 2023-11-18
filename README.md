# Gerador de senhas seguras
Este repositório foi criado com o propósito de oferecer um ambiente de aprendizado para treinar habilidades em NPX, NPM, bundler, linter e no uso de bibliotecas externas. Como parte desse processo, foi desenvolvida uma aplicação que utiliza a biblioteca `nanoid` para gerar senhas aleatórias.

## Testando localmente
Para testar em sua máquina, clone o repositório e instale as dependências:
```sh
git clone git@github.com:santos-mellissa/gerador-de-senhas.git
```

```sh
npm install
```

## Iniciando um projeto com NPM
> Os comandos a seguir descrevem o passo a passo utilizado na criação do ambiente de desenvolvimento deste projeto, podendo ser empregados para iniciar outros projetos.
### 1. Criar pasta do projeto:
```sh
mkdir [nome-do-projeto]
```
### 2. Criar diretório scr dentro da pasta do projeto:
```sh
mkdir scr && code .
```
### 3. Criar arquivo `index.html` dentro da pasta raiz do projeto;
### 4. Criar arquivo `main.js` dentro da pasta `scr`;
### 5. Importar o arquivo `main.js` no arquivo `index.html`:
```html
<script scr="/scr/main.js" type="module">
```
### 6. Criar o projeto com NPM:
```sh
npm init --y
```
> A flag `-y` é utilizada para criar um projeto com as configurações básicas de forma mais rápida e não interativa.
Ao utilizar esse comando, será criado na raiz do projeto um arquivo package.json. Ele é o principal arquivo de configuração do projeto - e é nele em que são armazenadas algumas das principais informações que o projeto utilizará.
### 7. Configurando o GIT
```sh
git init
git add .
git commit -m "initial commit"
```
### 7. Instalar bibliotecas externas
```sh
npm install [nome-da-biblioteca]
```
### 8. Ignorar a pasta `node_modules` no repositório git
```sh
touch .gitignore
echo "node_modules/" >> .gitignore
```
> Cria um arquivo `.gitignore` e adiciona a pasta `node_modules` dentro dele.
### 9. Adicionar a chave `"type": "module"` no arquivo `package.json`:
```json
//   "dependencies": {
//   },
     "type": "module"
// }
```
> Permite a utilização da sintaxe ES Modules no código.
### 10. Instalar bundler
> Para o navegador conseguir acessar as bibliotecas que estão na `node_modules` um bundler dev-server pode ser utilizado. O Vite fornece ferramentas de desenvolvimento para a aplicação, como, por exemplo, um servidor de desenvolvimento e um bundler para compilação final da aplicação.
```sh
npx vite --open
```
### 11. NPM scripts
No arquivo `package.json` adicionar um trecho que permita a abertura automática no navegador:
```json
"scripts": {
"dev": "vite --open"
}
```
### 12. Configurando um linter
> Um linter é uma ferramenta que ajuda a deixar o código limpo: ela aponta erros de estilo e formatação do código ([documentação](https://eslint.org/docs/latest/rules/)).
```sh
npm init @eslint/config
```
Executando o eslint para checar o código:
```sh
npx eslint ./src
```
Outra opção é adicionar os seguintes comandos no `script` do `package.json`:
```json
"scripts": {
"dev": "vite --open",
"lint": "eslint ./src"
},
```
## Dica
O vite permite já criar um novo projeto a partir de um template (Vanilla, React...) utilizando o comando `npm create vite@latest`.
