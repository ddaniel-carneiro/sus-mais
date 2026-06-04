⬅️ [Voltar](../../README.md)

# Requisitos

---

# 1. Requisitos Funcionais (RF)

## 1.1. Usuário Comum (Cidadão)

### RF - C01
- Deve permitir ao usuário realizar login e cadastro no sistema.

### RF - C02
- Deve permitir ao usuário criar um novo Reporte (denúncia para a prefeitura) preenchendo o formulário.

### RF - C03
- Deve permitir ao usuário anexar fotos ao Reporte.

### RF - C04
- Deve permitir ao usuário visualizar a lista de todos os seus Reportes e seus respectivos status (pendente, aceito, recusado).

### RF - C05
- Deve permitir ao usuário criar um novo Pedido de Coleta (para o Coletor) preenchendo o formulário.

### RF - C06
- Deve permitir ao usuário anexar fotos ao Pedido de Coleta.

### RF - C07
- Deve permitir ao usuário visualizar a lista de todos os seus Pedidos de Coleta e seus respectivos status.

## 1.2. Usuário Administrador (Admin)

### RF - A01
- Deve permitir ao Admin realizar login no sistema.

### RF - A02
- Deve permitir ao Admin visualizar a lista de todos os Reportes criados pelos Usuários Comuns.

### RF - A03
- Deve permitir ao Admin visualizar os detalhes de um Reporte, incluindo fotos e informações preenchidas.

### RF - A04
- Deve permitir ao Admin aceitar um Reporte válido, alterando seu status.

### RF - A05
- Deve permitir ao Admin recusar um Reporte inválido, alterando seu status.

### RF - A06
- Deve apresentar um painel de controle (dashboard) com métricas e resumos dos Reportes (ex: total de pendentes, aceitos, recusados).

## 1.3. Usuário Coletor

### RF - R01
- Deve permitir ao Coletor realizar login no sistema.

### RF - R02
- Deve permitir ao Coletor visualizar a lista de todos os Pedidos de Coleta criados pelos Usuários Comuns.

### RF - R03
- Deve permitir ao Coletor visualizar os detalhes de um Pedido de Coleta.

### RF - R04
- Deve permitir ao Coletor aceitar um Pedido de Coleta, alterando seu status e associando o pedido a si.

### RF - R05
- Deve permitir ao Coletor recusar um Pedido de Coleta.

### RF - R06
- Deve permitir ao Coletor finalizar/executar um Pedido de Coleta aceito, alterando seu status.

---

# 2. Requisitos Não Funcionais (RNF)

## 2.1. Tecnologia e Padrões

### RNF - T01 (Desenvolvimento)
- O backend deve ser construído utilizando Node.js com Express e TypeScript.

### RNF - T02 (Desenvolvimento)
- O frontend deve ser construído utilizando React e TypeScript.

### RNF - T03 (Banco de Dados)
- A persistência de dados deve ser gerenciada pelo Sequelize ORM.

### RNF - T04 (Interface)
- A estilização da interface deve ser feita utilizando o framework Tailwind CSS.

### RNF - T05 (API)
- O Backend deve expor uma API RESTful para comunicação com o Frontend.

## 2.2. Usabilidade e Estética

### RNF - U01
- A interface de usuário deve ser intuitiva e responsiva, adaptando-se a diferentes tamanhos de tela (desktop e mobile).

### RNF - U02
- O processo de criação de Reportes/Coletas deve ser guiado, com validação de formulário clara para evitar erros de submissão.

### RNF - U03
- O sistema deve ter um design limpo e acessível (utilizando Tailwind) para garantir uma boa experiência de usuário.

## 2.3. Segurança

### RNF - S01
- As senhas dos usuários devem ser criptografadas no banco de dados.

### RNF - S02
- O acesso às rotas protegidas (Admin e Coletor) deve ser controlado por autenticação via JWT (ou mecanismo similar).

### RNF - S03
- O sistema deve implementar autorização para garantir que apenas Admins possam gerenciar Reportes, e Coletores possam gerenciar Coletas.

## 2.4. Desempenho

### RNF - P01
- A busca e listagem de Reportes e Pedidos de Coleta deve ser rápida, mesmo com um grande volume de dados (sugerindo otimização de consultas Sequelize e paginação).

### RNF - P02
- O tempo de carregamento inicial da aplicação web (Frontend) deve ser inferior a 3 segundos em conexões de internet razoáveis.