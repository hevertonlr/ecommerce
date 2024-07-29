# ${\textsf{\color{#112bda}F\color{#e1278a}u\color{#ff8818}ll\color{#808080}Stack [Education]}}$<br/><sub>Módulo 2 - MiniProjeto 2</sub>

# Projeto de Marketplace em Angular

## Visão Geral

Bem-vindo ao nosso projeto de Marketplace desenvolvido em Angular! Este projeto tem como objetivo consolidar o aprendizado dos conceitos de Angular através da construção de uma aplicação prática e funcional.

## Descrição do Projeto

O Marketplace é uma plataforma que permite aos usuários visualizar, buscar e comprar produtos variados. A aplicação é estruturada de forma a proporcionar uma experiência de usuário intuitiva e eficiente, utilizando as melhores práticas de desenvolvimento em Angular.

### Principais Funcionalidades

1. **Página Inicial**

   - **Cabeçalho:** Inclui logo, barra de pesquisa e opções de navegação.
   - **Banner com Carrossel:** Apresenta as ofertas atuais do site.
   - **Seções de Produtos:**
     - Mais Vendidos da Semana
     - Ofertas do Dia
   - **Rodapé:** Contém links úteis e informações da empresa.

2. **Busca de Produtos**

   - Campo de busca no cabeçalho para facilitar a pesquisa de produtos.
   - Exibição de resultados de busca em forma de cartões de produtos.
   - Mensagens de feedback caso nenhum produto seja encontrado.

3. **Detalhes do Produto**

   - Exibição detalhada de cada produto, incluindo imagens, descrição, preço e comentários de clientes.
   - Opção para adicionar produtos ao carrinho.

4. **Carrinho de Compras**
   - Listagem de produtos adicionados ao carrinho com opções para ajustar quantidades e remover itens.
   - Resumo da compra com total dos produtos, valor do frete e valor final.
   - Botão de finalizar compra (sem ação).

### Tecnologias Utilizadas

- **Angular:** Framework principal para desenvolvimento da aplicação.
- **HTML5 & CSS3:** Estrutura e estilização das páginas.
- **TypeScript:** Linguagem de programação utilizada no desenvolvimento do Angular.
- **NgPrime:** Framework para funcionalidades (carousel).
- **Tailwindcss:** Framework de CSS para design responsivo e estilização de componentes.

### Estrutura do Código

O código do projeto está organizado em componentes statless, seguindo as práticas de desenvolvimento em Angular apresentados no curso do Floripa Mais Tech:

- **Componentes:** Uso de componentes reutilizáveis para construção das interfaces de usuário.
- **Serviços:** Implementação de serviços para gerenciamento de dados e lógica de negócios.
- **Rotas:** Configuração de rotas para navegação entre as diferentes páginas da aplicação.
- **Database:** Objetos Mock dos dados utilizado nas interfaces do usuario

**Equipe de Desenvolvimento:**

- [Heverton Luan Roieski](https://github.com/hevertonlr)

Agradecemos a todos os colaboradores pelo empenho e dedicação.

### Como Executar o Projeto

Para executar o projeto localmente, siga os seguintes passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/hevertonlr/ecommerce.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ecommerce
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run start
   ```

5. Abra o navegador e acesse:
   ```
   http://localhost:4200
   ```
