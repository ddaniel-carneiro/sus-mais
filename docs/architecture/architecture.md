⬅️ [Voltar](../../README.md)

# 💾 Modelo de Dados com Sequelize (Express/TypeScript)

- O sistema precisa gerenciar usuários com diferentes perfis, denúncias (Reports) e pedidos de coleta (Collections).

## 1. Usuários e Perfis de Acesso (Roles)

### Roles (Perfis)

- Esta tabela define os perfis de acesso no sistema, crucial para o AbilityMiddleware que parece já existir no seu código (backend/src/middlewares/AbilityMiddleware.ts).

| Campo        | Tipo Sequelize    | Descrição                                                     |
| ------------ | ----------------- | ------------------------------------------------------------- |
| [id]         | DataTypes.BIGINT | Chave primária.                                               |
| [name]       | DataTypes.STRING  | Nome do perfil (Ex: 'user', 'admin', 'collector'), único.     |
| [ability]    | DataTypes.STRING  | Recebe o mesmo valor que o nome mas tudo em lowercase, único. |
| [created_at] | DataTypes.STRING  | Data de criação.                                              |
| [updated_at] | DataTypes.STRING  | Data da última atualização.                                   |

- Valores Iniciais (Seeder): **'user'**, **'admin'**, **'collector'**.

### Users (Usuários)

- Esta tabela armazena todos os usuários, independente do perfil.

| Campo           | Tipo Sequelize    | Descrição                                      |
| --------------- | ----------------- | ---------------------------------------------- |
| [id]            | DataTypes.BIGINT  | Chave primária.                                |
| [name]          | DataTypes.STRING  | Nome completo do usuário.                      |
| [cpf]           | DataTypes.STRING  | Cpf do usuário, único.                         |
| [email]         | DataTypes.STRING  | Email do usuário, único.                       |
| [password]      | DataTypes.STRING  | Senha criptografada (hash).                    |
| [phone]         | DataTypes.STRING  | Número de celular do usuário, único.           |
| [profile_photo] | DataTypes.STRING  | Url da foto de perfil, único.                  |
| [status]        | DataTypes.BOOLEAN | Indica se o usuário está ativo (padrão: true). |
| [role_id]       | DataTypes.BIGINT  | Chave estrangeira para a tabela Roles.         |
| [deleted_at]    | DataTypes.DATE    | Data de exclusão.                              |
| [created_at]    | DataTypes.DATE    | Data de criação.                               |
| [updated_at]    | DataTypes.DATE    | Data da última atualização.                    |

- Relacionamento:
    - **User** pertence a (belongsTo) **Role**.

## 2. Status e Tipos de Chamado

### Status (Status)

- Define os possíveis estados para Reports e Collections.

| Campo        | Tipo Sequelize    | Descrição                                                          |
| ------------ | ----------------- | ------------------------------------------------------------------ |
| [id]         | DataTypes.BIGINT  | Chave primária.                                                    |
| [name]       | DataTypes.STRING  | Nome do Status (Ex: 'Em Análise', 'Aceito', 'Recusado'...), único. |
| [created_at] | DataTypes.STRING  | Data de criação.                                                   |
| [updated_at] | DataTypes.STRING  | Data da última atualização.                                        |

- Valores Iniciais (Seeder): **'Em Análise'** (report/collection), **'Aceito'** (report/collection), **'Recusado'** (report/collection), **'Encerrando'** (collection).

## 3. Denúncias e Relatórios (Reports)

### Reports (Denúncias)

- Informações gerais sobre as denúncias feitas pelos usuários comuns.

| Campo           | Tipo Sequelize    | Descrição                              |
| --------------- | ----------------- | -------------------------------------- |
| [id]            | DataTypes.BIGINT  | Chave primária.                        |
| [user_id]       | DataTypes.BIGINT  | Usuário que fez a denuncia.            |
| [title]         | DataTypes.STRING  | Titulo da denúncia.                    |
| [description]   | DataTypes.STRING  | Descrição da denúncia.                 |
| [street]        | DataTypes.STRING  | Rua da denúncia.                       |
| [number]        | DataTypes.STRING  | Número de uma casa próxima a denúncia. |
| [neighborhood]  | DataTypes.STRING  | Bairro da denúncia.                    |
| [postal_code]   | DataTypes.STRING  | Cep da denúncia.                       |
| [status_id]     | DataTypes.BIGINT  | Chave estrangeira para a tabela status.|
| [deleted_at]    | DataTypes.DATE    | Data de exclusão.                      |
| [created_at]    | DataTypes.DATE    | Data de criação.                       |
| [updated_at]    | DataTypes.DATE    | Data da última atualização.            |

- Relacionamentos:
    - **Report** pertence a **User** (criador).
    - **Report** pertence a **Status**.

### ReportPhotos (Fotos da Denúncia)

- Permite anexar várias fotos a um Report.

| Campo           | Tipo Sequelize    | Descrição                   |
| --------------- | ----------------- | --------------------------- |
| [id]            | DataTypes.BIGINT  | Chave primária.             |
| [report_id]     | DataTypes.BIGINT  | Reporte da imagem.          |
| [path]          | DataTypes.STRING  | Caminho da imagem.          |
| [created_at]    | DataTypes.DATE    | Data de criação.            |
| [updated_at]    | DataTypes.DATE    | Data da última atualização. |

- Relacionamento:
    - **ReportPhoto** pertence a **Report**.
    - **Report** tem muitos (hasMany) **ReportPhotos**.

## 4. Pedidos de Coleta (Collections)

### Collections (Pedidos de Coleta)

- Informações sobre os pedidos de coleta feitos pelos usuários comuns.

| Campo          | Tipo Sequelize    | Descrição                               |
| -------------- | ----------------- | --------------------------------------- |
| [id]           | DataTypes.BIGINT  | Chave primária.                         |
| [user_id]      | DataTypes.BIGINT  | Usuário que criou o pedido de coleta.   |
| [street]       | DataTypes.STRING  | Rua da coleta.                          |
| [number]       | DataTypes.STRING  | Número de uma casa próxima a coleta.    |
| [neighborhood] | DataTypes.STRING  | Bairro da coleta.                       |
| [postal_code]  | DataTypes.STRING  | Cep da coleta.                          |
| [status_id]    | DataTypes.BIGINT  | Chave estrangeira para a tabela status. |
| [deleted_at]   | DataTypes.DATE    | Data de exclusão.                       |
| [created_at]   | DataTypes.DATE    | Data de criação.                        |
| [updated_at]   | DataTypes.DATE    | Data da última atualização.             |

- Relacionamentos:
    - **Collection** pertence a **User** (criador).
    - **Collection** pertence a **Status**.

### CollectionPhotos (Fotos da Coleta)

- Permite anexar várias fotos a um Pedido de Coleta.

| Campo           | Tipo Sequelize    | Descrição                   |
| --------------- | ----------------- | --------------------------- |
| [id]            | DataTypes.BIGINT  | Chave primária.             |
| [collection_id] | DataTypes.BIGINT  | Coleta da imagem.           |
| [path]          | DataTypes.STRING  | Caminho da imagem.          |
| [created_at]    | DataTypes.DATE    | Data de criação.            |
| [updated_at]    | DataTypes.DATE    | Data da última atualização. |

- Relacionamento:
    - **CollectionPhoto** pertence a **Collection**.
    - **Collection** tem muitos **CollectionPhotos**.

### UserCollections (Coletor e Pedido)

- Esta é uma tabela de junção (N:N) que lida com o seu cenário: qual Coletor está associado a qual pedido de coleta. Como um Coletor pode aceitar muitos pedidos e um pedido pode ser (em tese) associado a um Coletor, embora na prática seja 1:1, a modelagem N:N é robusta para futuras expansões.

| Campo           | Tipo Sequelize    | Descrição                               |
| --------------- | ----------------- | --------------------------------------- |
| [id]            | DataTypes.BIGINT  | Chave primária.                         |
| [user_id]       | DataTypes.BIGINT  | Usuário que aceitou o pedido de coleta. |
| [collection_id] | DataTypes.BIGINT  | Coleta que foi aceita pelo usuário.     |
| [status_id]     | DataTypes.BIGINT  | Chave estrangeira para a tabela status. |
| [completed_at]  | DataTypes.DATE    | Data de conclusão.                      |
| [deleted_at]    | DataTypes.DATE    | Data de exclusão.                       |
| [created_at]    | DataTypes.DATE    | Data de criação.                        |
| [updated_at]    | DataTypes.DATE    | Data da última atualização.             |

- Relacionamentos:
    - **User** (Coletor) pertence a muitos **Collections** através de **UserCollections**.
    - **Collection** pertence a muitos **Users** (Coletores) através de **UserCollections**.