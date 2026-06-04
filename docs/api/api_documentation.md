⬅️ [Voltar](../../README.md)

# 📄 Documentação da API Sustenta Plus

---

## 🔑 Autenticação

- Todos os **endpoints** de recursos (exceto /register e /login) exigem um **Token JWT** no cabeçalho Authorization no formato **Bearer** <token>.

| Método | Endpoint    | Descrição                                    | Permissões | Resposta Esperada |
| -------| ----------- | -------------------------------------------- | ---------- | ----------------- |
| POST   | `/register` | Registra um novo usuário padrão (user).      | Pública    | 201               |
| POST   | `/login`    | Autentica um usuário e retorna um Token JWT. | Pública    | 200               |

### Register body

```bash
{   
    "name": "User",
    "email": "user@gmail.com",
    "password": "123456",
    "cpf": "000.000.000-00",
    "phone": "+5585999999999",
    "role_id": 2
}
```

### Login Body

```bash
{
	"email": "user@gmail.com",
    "password": "123456",
}
```

---

## ⚠️ Relatórios (/report)

- Endpoints para gerenciar relatórios de incidentes ou informações.

| Método | Endpoint                   | Descrição                                                   | Permissões | Resposta Esperada |
| -------| -------------------------- | ----------------------------------------------------------- | ---------- | ----------------- |
| GET    | `/admin/report`            | Lista todos os relatórios. Query params: page, limit.       | Admin      | 200               |
| PUT    | `/admin/report/:id`        | Atualiza um relatório específico.                           | Admin      | 200               |
| PATCH  | `/admin/report/accept/:id` | Altera o status do relatório para Aprovado.                 | Admin      | 200               |
| PATCH  | `/admin/report/refuse/:id` | Altera o status do relatório para Recusado.                 | Admin      | 200               |
| GET    | `/user/report`             | Lista apenas os seus relatórios. Query params: page, limit. | User       | 200               |
| POST   | `/user/report`             | Cria um novo relatório.                                     | User       | 201               |
| DELETE | `/user/report/:id`         | Exclui um relatório de propriedade do usuário.              | User       | 200               |

---

## 🗑️ Agendamentos de Coleta (/collection)

- Endpoints para agendamento e gerenciamento de coletas de lixo ou materiais.

| Método | Endpoint                           | Descrição                                                                                      | Permissões | Resposta Esperada |
| -------| ---------------------------------- | ---------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| GET    | `/admin/collection`                | Lista todos os agendamentos de coleta. Query params: page, limit.                              | Admin      | 200               |
| PUT    | `/admin/collection/:id`            | Atualiza um agendamento de coleta específico.                                                  | Admin      | 200               |
| GET    | `/user/collection`                 | Lista apenas os seus agendamentos de coleta. Query params: page, limit.                        | User       | 200               |
| POST   | `/user/collection`                 | Cria um novo agendamentos de coleta.                                                           | User       | 201               |
| GET    | `/collector/collection`            | Lista apenas os agendamentos de coleta que ainda estão disponiveis. Query params: page, limit. | Collector  | 200               |
| GET    | `/collector/my-collections`        | Lista os agendamentos de coleta que o coletor aceitou. Query params: page, limit.              | Collector  | 200               |
| PATCH  | `/collector/scheduling/accept/:id` | Um coletor aceita um agendamento de coleta.                                                    | Collector  | 200               |

---

# 🛡️ Middlewares de Segurança

- Os middlewares garantem que:

## 1. AuthMiddleware (/backend/src/middlewares/AuthMiddleware.ts)
- O token JWT está presente no cabeçalho Authorization no formato Bearer <token>.
- O token é válido e decodifica o user_id e a ability (habilidade/role) do usuário.
- Esses dados do usuário são injetados no objeto req.user para uso posterior.

## 2. AbilityMiddleware (/backend/src/middlewares/AbilityMiddleware.ts):
- Verifica se o usuário autenticado (req.user.ability) possui a permissão (requiredAbility) necessária para acessar a rota.
- Se não tiver a permissão, retorna 403 Forbidden.
- A lógica de permissão (ex: se admin tem todas as habilidades) é definida na função hasAbility (provavelmente em /backend/src/utils/functions.ts).