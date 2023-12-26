# Introduçao

## 1. **O que é Angular**
   - Framework para aplicações web
   - Desenvolvido pela Google
   - Baseado em TypeScript

## 2. **História do Angular**
   - AngularJS (Angular 1) lançado em 2010
   - Angular 2 lançado em 2016
   - Evolução e melhorias significativas do Angular 2 em diante

## 3. **Diferença entre Linguagem e Framework**
   - Linguagem: Conjunto de regras sintáticas e gramaticais para criar programas (ex: JavaScript, TypeScript)
   - Framework: Conjunto de ferramentas e bibliotecas para facilitar o desenvolvimento (ex: Angular)

## 4. **Node.js**
   - O que é: Ambiente de execução para JavaScript no servidor
   - Por que é necessário: Permite executar código JavaScript fora do navegador, útil para ferramentas de desenvolvimento

## 5. **NPM (Node Package Manager)**
   - **O que é**: 
     - Gerenciador de pacotes para a linguagem de programação JavaScript.
     - Facilita o compartilhamento e reutilização de código entre desenvolvedores ao redor do mundo.
     - Vem integrado com o Node.js, não necessitando de instalação separada.

   - **Utilidade**:
     - Instalação, atualização e gerenciamento de bibliotecas e dependências de projetos JavaScript e TypeScript.
     - Gerencia as dependências de projetos através do arquivo `package.json`.

   - **Sintaxes Básicas**:
     - `npm init`: Inicializa um novo projeto Node.js, criando o arquivo `package.json`.
     - `npm install [nome-do-pacote]`: Instala um pacote e suas dependências no projeto atual.
     - `npm install`: Instala todas as dependências listadas no arquivo `package.json`.
     - `npm update [nome-do-pacote]`: Atualiza um pacote específico.
     - `npm uninstall [nome-do-pacote]`: Remove um pacote do projeto.
     - `npm list`: Lista os pacotes instalados no projeto atual.
     - `npm search [termo-de-busca]`: Busca pacotes no registro do NPM.

   - **Arquivo `package.json`**:
     - Define propriedades do projeto, como nome, versão, scripts, dependências e metadados.
     - Permite especificar versões de pacotes para garantir compatibilidade e estabilidade do projeto.

   - **npm scripts**:
     - Scripts personalizados definidos no `package.json` para automatizar tarefas comuns, como testes, construção e implantação.

   - **npm e versionamento**:
     - Suporta versionamento semântico para gerenciar versões de pacotes de forma eficaz.
     - Permite especificar faixas de versão para atualizações automáticas dentro de limites compatíveis.

# Basico do Angular 2

## Projeto Angular - Estrutura Básica

- **Criação do Projeto**
  - Comando: `ng new [nome-do-projeto]`
  - Geração automática de arquivos e diretórios

- **Diretórios e Arquivos**
  - `/src`
    - `app`
      - Componentes, serviços e módulos
      - Arquivos: `app.component.ts/html/css/spec.ts`, `app.module.ts`
    - `assets`
      - Recursos estáticos (imagens, estilos)
    - `environments`
      - Configurações para ambientes diferentes

  - `package.json`
    - Dependências e scripts do projeto

  - `angular.json`
    - Configuração do Angular CLI

  - `tsconfig.json`
    - Configurações do TypeScript

  - `node_modules/`
    - Dependências instaladas

  - `README.md`
    - Documentação do projeto

  - `index.html`
    - Página principal do aplicativo

  - `main.ts`
    - Ponto de entrada do aplicativo

  - `polyfills.ts`
    - Polyfills para compatibilidade

  - `test.ts`
    - Configurações de testes

  - `.angular-cli.json` / `.angular.json`
    - Configurações adicionais do CLI

## Como um Aplicativo Angular é Carregado e Iniciado

- **Carregamento Inicial**
  - `index.html` é a primeira página carregada.
  - Referencia scripts essenciais (ex: `main.js`).

- **Bootstrap do Aplicativo**
  - Processo iniciado pelo `main.ts`.
  - Cria e compila o módulo raiz (tipicamente `AppModule`).

- **Compilação do Módulo Raiz**
  - Angular compila o módulo e componentes associados.
  - Resolve dependências dos serviços.

- **Criação do Componente Raiz**
  - `AppComponent` geralmente serve como componente raiz.
  - Inserido dentro da tag `<app-root>` em `index.html`.

- **Renderização do Componente Raiz**
  - Angular executa a lógica do componente.
  - Renderiza o template associado ao componente.

- **Interpretação de Diretivas e Data Binding**
  - Processa diretivas estruturais (ex: `*ngIf`, `*ngFor`).
  - Estabelece ligação de dados entre modelo e visualização.

- **Detecção de Mudanças**
  - Angular monitora mudanças nas propriedades e atualiza a visualização.
  - Utiliza o mecanismo de detecção de mudanças para manter sincronia.

- **Roteamento (Opcional)**
  - Se utilizado, o Angular Router carrega e renderiza componentes conforme a URL.
  - Gerencia navegação e histórico de visualizações.

- **Conclusão do Processo**
  - O aplicativo Angular agora está totalmente inicializado e interativo.
  - Pronto para responder a interações do usuário e atualizações de dados.

## Inicialização de um Aplicativo Angular

- **Carregamento da Página**
  - `index.html` carregado pelo servidor.
  - Única página em uma aplicação de página única (SPA).

- **Elemento `app-root`**
  - `app-root` é o componente raiz.
  - Não é um elemento HTML padrão, mas um componente Angular.
  - Inicialmente exibe "Loading...".
  - Substituído pelo template do AppComponent.

- **Análise do AppComponent**
  - Decorador `@Component` define o seletor e o template.
  - Seletor `app-root` corresponde ao elemento no `index.html`.
  - Template substitui o conteúdo dentro de `app-root`.

- **Inicialização do Angular**
  - Processo iniciado pelo arquivo `main.ts`.
  - Primeiro código executado no aplicativo.
  - Determina se o aplicativo está em modo de produção.
  - Inicia a aplicação Angular com `AppModule`.

- **Importância do `AppModule`**
  - Define os componentes a serem carregados pelo Angular.
  - Contém a matriz `bootstrap` com `AppComponent`.
  - Informa ao Angular sobre o `AppComponent` a ser renderizado.

- **Processo de Bootstrap**
  - Angular analisa o `AppComponent` e sua configuração.
  - Substitui `app-root` no `index.html` pelo template do `AppComponent`.
  - Renderiza o template, que é o ponto de partida visual do aplicativo.

- **Scripts no `index.html`**
  - Scripts adicionados automaticamente pelo Angular CLI.
  - Contêm código do aplicativo e bibliotecas necessárias.
  - Responsáveis por iniciar o carregamento do Angular.

- **Entendimento do Fluxo de Inicialização**
  - Importância de entender este processo para o desenvolvimento Angular.
  - Base para entender a criação de componentes e a estrutura do módulo.

## Componentes Angular - Detalhes e Importância

- **O que são Componentes?**
  - Blocos de construção fundamentais em Angular.
  - Cada componente é uma classe em TypeScript com um decorador `@Component`.
  - Inclui um template HTML, estilos CSS (opcionais) e lógica TypeScript.

- **Estrutura de um Componente**
  - **Template HTML**: Define a estrutura visual e o layout.
  - **Estilos CSS**: Estilos específicos para o template do componente.
  - **Classe TypeScript**: Contém lógica e dados para o componente.
  - **Decorador `@Component`**: Liga a lógica à visualização e define seletor, template, e estilos.

- **Importância dos Componentes**
  - **Modularidade**: Permitem dividir a aplicação em partes menores e gerenciáveis.
  - **Reutilização**: Componentes podem ser reutilizados em diferentes partes da aplicação.
  - **Manutenção**: Facilita a manutenção e atualizações, já que as mudanças são isoladas em componentes específicos.
  - **Separar Interesses**: Separação clara entre lógica de negócios, apresentação e estilos.

- **Exemplo Prático**
  - Uma aplicação pode ter componentes para cabeçalho, rodapé, barra lateral, conteúdo principal, etc.
  - Cada componente é independente e pode ter suas próprias funcionalidades e estilos.

- **Aninhamento de Componentes**
  - Componentes podem ser aninhados dentro de outros componentes.
  - Permite a construção de interfaces complexas de maneira organizada e estruturada.

- **Criação de Componentes com Angular CLI**
  - Comando `ng generate component [nome-do-componente]` cria um novo componente.
  - Gera arquivos padrão: HTML, CSS, TypeScript e de teste.

- **Fluxo de Dados em Componentes**
  - Comunicação entre componentes pai e filho.
  - Uso de `@Input()` e `@Output()` para compartilhar dados e eventos.

- **Componente Raiz - `AppComponent`**
  - Ponto inicial da aplicação Angular.
  - Contém a estrutura principal e onde outros componentes são inseridos.


## Componentes Angular - Criação, Configuração 

- **Componentes Angular - Conceitos Básicos**
  - **Definição**: Blocos de construção fundamentais da UI em uma aplicação Angular.
  - **Estrutura**: Compostos por uma classe TypeScript, um template HTML, e estilos CSS opcionais.
  - **Decorador `@Component`**: Transforma uma classe TypeScript em um componente Angular.

- **AppComponent - O Componente Raiz**
  - **Função Especial**: Serve como o componente raiz da aplicação.
  - **Inicialização**: Listado no `AppModule` na matriz de bootstrap.
  - **Papel**: Ponto de aninhamento para outros componentes.

- **Criando um Componente com Angular CLI**
  - **Comando**: `ng generate component [nome-do-componente]`.
  - **Arquivos Gerados**: Classe TypeScript, HTML, CSS, e arquivo de teste.
  - **Estrutura de Arquivos**: Classe do componente (`[nome-do-componente].component.ts`), template HTML, estilos CSS, e arquivo de teste (`[nome-do-componente].component.spec.ts`).

- **Detalhes do Decorador `@Component`**
  - **Seletor**: Nome único para identificação em templates (ex: `app-servidor`).
  - **Template**: Pode ser externo (`templateUrl`) ou inline (`template`).
  - **Estilos**: Especificados via `styleUrls` ou inline.

- **Implementando e Configurando Componentes**
  - **Classe do Componente**: Define lógica e estado.
  - **Data Binding**: Interpolação (`{{ data }}`), property binding (`[property]="data"`), e event binding (`(event)="handler()"`).
  - **Aninhamento de Componentes**: Uso de componentes dentro de outros, incluindo `AppComponent`.

- **Ciclo de Vida dos Componentes**
  - **Ganchos de Ciclo de Vida**: `ngOnInit`, `ngOnChanges`, `ngOnDestroy`, entre outros.
  - **Importância**: Permite gerenciar estados e comportamentos durante o ciclo de vida do componente.

- **Comunicação entre Componentes**
  - **`@Input()` e `@Output()`**: Para comunicação de dados e eventos entre componentes pai e filho.
  - **Comunicação Indireta**: Uso de serviços e injeção de dependências.

- **Aspectos Avançados de Componentes**
  - **Diretivas**: Para manipulação do DOM e comportamento dos componentes.
  - **Serviços**: Lógica de negócios reutilizável e centralizada.
  - **Testes Unitários**: Essenciais para garantir a funcionalidade e qualidade dos componentes.


## Entendendo o Papel do AppModule e a Declaração de Componentes

- **AppModule - Visão Geral**
  - **Função**: Serve como o pacote principal de funcionalidades da aplicação Angular.
  - **Características**: Agrupa componentes, serviços e outros módulos.
  - **Importância**: Fornece informações ao Angular sobre os recursos usados na aplicação.

- **Estrutura do AppModule**
  - **Classe TypeScript**: Similar aos componentes, é uma classe TypeScript com um decorador.
  - **Decorador `@NgModule`**: Importado de `@angular/core`, define a configuração do módulo.
  - **Propriedades do Decorador `@NgModule`**:
    - `declarations`: Lista de componentes, diretivas e pipes pertencentes ao módulo.
    - `imports`: Outros módulos cujas exportações são necessárias.
    - `providers`: Serviços que serão utilizados globalmente na aplicação.
    - `bootstrap`: Componente raiz que Angular deve carregar.

- **Declaração de Componentes**
  - **Processo de Registro**: Componentes devem ser declarados em `declarations`.
  - **Exemplo Prático**: Registro do `ServerComponent` no AppModule.
  - **Importância da Declaração**: Angular não escaneia automaticamente os arquivos; componentes devem ser explicitamente registrados.

- **Importando Componentes**
  - **Necessidade de Importação**: TypeScript precisa saber a localização dos componentes.
  - **Adicionando Importações**: Importar o caminho do componente no topo do arquivo AppModule.
  - **Exemplo**: `import { ServerComponent } from './server/server.component';`

- **Uso de Módulos Externos**
  - **Importações de Módulos Angular**: Como `BrowserModule` e `HttpModule`.
  - **Função**: Fornecem funcionalidades adicionais e são essenciais para o funcionamento da aplicação.

- **Aspectos Avançados**
  - **Módulos Personalizados**: Em projetos grandes, a aplicação pode ser dividida em múltiplos módulos.
  - **Benefícios da Modularização**: Facilita a organização e a manutenção da aplicação.

- **Próximos Passos**
  - **Aprofundamento em Módulos**: Explorar mais sobre a criação e uso de módulos personalizados.
  - **Integração de Componentes e Serviços**: Como componentes interagem com serviços dentro do módulo.

## Trabalhando com Componentes Autônomos em Angular

- **Introdução aos Componentes Autônomos**
  - **Definição**: Componentes que funcionam independentemente de `@NgModules`.
  - **Objetivo**: Reduzir a quantidade de código repetitivo (boilerplate).

- **Construção de Componentes Autônomos**
  - **Uso do Decorador `@Component` com `standalone: true`**:
    - Exemplo:
      ```typescript
      @Component({
        standalone: true,
        selector: 'app-cmp',
        template: '<h1>I work standalone!</h1>'
      })
      export class SomeComponent {}
      ```
  - **Independência de `@NgModule`**: Não precisam e não devem ser adicionados a nenhum `@NgModule`.

- **Funcionalidades e Importações**
  - **Importações Especiais no Decorador `@Component`**:
    - Para definir quais funcionalidades ou seletores de outros componentes estarão disponíveis.
    - Exemplo:
      ```typescript
      @Component({
        standalone: true,
        selector: 'app-cmp',
        template: '<app-some-other-component />',
        imports: [SomeOtherComponent]
      })
      export class SomeComponent {}
      ```

- **Considerações Sobre o Uso de Componentes Autônomos**
  - **Vantagens**: Menos código de configuração e gerenciamento.
  - **Contexto Histórico**: `@NgModules` foi o único método para criar componentes Angular por mais de 5 anos.
  - **Projetos Atuais**: Muitos projetos ainda utilizam `@NgModules`, especialmente os grandes e estabelecidos.

- **Decidindo Sobre o Uso de Componentes Autônomos**
  - **Redução de Código Repetitivo**: Beneficial para projetos menores ou novos.
  - **Compatibilidade**: Considerar em projetos existentes que já utilizam `@NgModules`.

## Trabalhando com Templates e Estilos de Componentes em Angular

- **Trabalhando com Templates de Componentes**
  - **Definição de Template**: A parte HTML do componente que define sua estrutura visual.
  - **Uso do Decorador `@Component`**:
    - `templateUrl`: Caminho para um arquivo HTML externo.
    - `template`: Template HTML inline.
  - **Data Binding**:
    - Interpolação: `{{ data }}` para exibir dados dinamicamente.
    - Property Binding: `[property]="data"` para vincular propriedades de elementos HTML a dados do componente.
    - Event Binding: `(event)="handler()"` para responder a eventos do usuário.
  - **Diretivas Angular**:
    - Estruturais (ex: `*ngIf`, `*ngFor`) para manipular a estrutura do DOM.
    - Atributos (ex: `[ngClass]`, `[ngStyle]`) para modificar a aparência e comportamento dos elementos.

- **Trabalhando com Estilos de Componentes**
  - **Estilização CSS**:
    - `styleUrls`: Caminho para um ou mais arquivos CSS externos.
    - `styles`: Estilos CSS inline no decorador `@Component`.
  - **Encapsulamento de Estilos**:
    - Estilos definidos em um componente são encapsulados a esse componente, não afetando outros elementos.
  - **Técnicas de Estilização**:
    - Classes e IDs para estilização específica.
    - Uso de SASS/SCSS para estilos mais complexos e aninhados.
  - **Manipulação Dinâmica de Estilos**:
    - Binding com `[ngStyle]` para estilos inline dinâmicos.
    - Binding com `[ngClass]` para adicionar ou remover classes CSS baseadas em condições.

- **Melhores Práticas**
  - **Organização de Templates**: Manter templates limpos e legíveis, especialmente para componentes maiores.
  - **Componentização de Estilos**: Evitar estilos globais; focar em estilos específicos do componente.
  - **Reutilização e Modularização**: Criar componentes e estilos reutilizáveis para manter a consistência e facilitar a manutenção.

- **Próximos Passos**
  - **Experimentação Prática**: Aplicar esses conceitos em componentes reais para entender melhor a integração de templates e estilos.
  - **Explorar Técnicas Avançadas**: Aprofundar-se em técnicas como animações CSS, media queries e pré-processadores CSS.

## Entendendo Completamente o Seletor de Componentes em Angular

- **Função do Seletor de Componentes**
  - **Definição**: O seletor determina como o componente será utilizado em templates HTML.
  - **Importância**: Deve ser único para evitar sobreposição com elementos HTML existentes ou componentes de terceiros.

- **Tipos de Seletores**
  - **Seletor de Elemento**: Mais comum para componentes, similar a seletores CSS (ex: `app-servers`).
  - **Seletor de Atributo**: Utiliza colchetes para definir o componente como um atributo de um elemento HTML (ex: `[app-servers]`).
  - **Seletor de Classe**: Define o componente como uma classe CSS (ex: `.app-servers`).
  - **Restrições**: Seletores de ID e pseudo-seletores como `:hover` não são suportados.

- **Uso do Seletor de Componentes**
  - **Definindo no Decorador `@Component`**: 
    ```typescript
    @Component({
      selector: 'app-servers', // Seletor de Elemento
      // ...
    })
    ```
  - **Alterando Tipo de Seletor**:
    - Mudar para seletor de atributo ou classe conforme a necessidade.

- **Integração com HTML**
  - **Seletor de Elemento**: Usado como uma tag HTML (ex: `<app-servers></app-servers>`).
  - **Seletor de Atributo**: Usado como um atributo em um elemento existente (ex: `<div app-servers></div>`).
  - **Seletor de Classe**: Usado como uma classe em um elemento (ex: `<div class="app-servers"></div>`).

- **Melhores Práticas**
  - **Preferência por Seletor de Elemento**: Geralmente preferido para componentes para criar elementos personalizados.
  - **Evitar Conflitos**: Garantir que o seletor não entre em conflito com nomes de tags HTML nativas ou seletores de bibliotecas de terceiros.
  - **Clareza e Consistência**: Seletor deve ser claro e consistente com a nomenclatura e funcionalidade do componente.

- **Exceções e Casos Especiais**
  - **Uso de Seletores de Atributo e Classe**: Em casos específicos onde a integração de estilo ou comportamento é necessária.
  - **Diretivas Angular**: Uso mais frequente de seletores de atributo e classe em diretivas.

- **Próximos Passos**
  - **Experimentação**: Praticar com diferentes tipos de seletores em componentes.
  - **Análise de Caso de Uso**: Considerar o tipo de seletor mais apropriado com base na necessidade do componente.

