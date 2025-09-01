export const Messages = {
  default: {
    docs: {
      HEALTH_CHECK_SUMMARY: 'Verificar o estado da API',
    },
    logs: {
      APP_RUNNING: 'Application is running on: http://localhost:',
      SOCKET_IO_READY: 'Socket.IO Gateway is ready for connections',
    },
    pagination: {
      PAGE_NUMBER: 'Número da página',
      LIMIT_PER_PAGE: 'Limite de itens por página',
      FILTER_BY_NAME: 'Filtrar por nome',
      ORDER: 'Ordem da ordenação (asc ou desc)',
      ORDER_FIELDS: 'Campo para ordenação (ex: name, mac)',
    },
  },
  Model: {
    http: {
      INTERNAL_SERVER_ERROR: 'Internal Server Error',
      ID_NOT_FOUND_ERROR: 'Nenhum modelo de central encontrado para o id',
      NOT_FOUND: 'Not Found',
    },
    docs: {
      API_TAG: 'Models',
      SUMMARY: 'Listar todos os modelos de central',
      CENTRAL_MODEL_NAME: 'AMT 4010 SMART',
    },
  },
  Central: {
    http: {
      INTERNAL_SERVER_ERROR: 'Internal Server Error',
      CREATE_INTERNAL_SERVER_ERROR:
        'Erro interno ao tentar cadastrar a central',
      DELETE_INTERNAL_SERVER_ERROR:
        'Erro interno ao tentar excluir os dados da central',
      CREATED_SUCCESS: 'Created',
      MAC_NOT_UNIQUE: 'Já existe uma central cadastrada com o endereço MAC:',
      BAD_REQUEST: 'Bad Request',
      CONFLICT: 'Conflict',
      ID_NOT_FOUND_ERROR: 'Nenhuma central encontrada para o id',
      NOT_FOUND: 'Not Found',
      OK: 'ok',
      NO_CONTENT: 'No Content',
    },
    docs: {
      API_TAG: 'Centrals',
      CREATE_SUMMARY: 'Cadastrar uma nova central',
      FIND_ONE_SUMMARY: 'Obter os dados de uma central por ID',
      DELETE_SUMMARY: 'Deletar os dados de uma central por ID',
      FIND_ALL_SUMMARY: 'Obter dados de todas as centrais paginado',
      UPDATE_SUMMARY: 'Atualizar os dados de uma central',
      COUNT_SUMMARY: 'Obter o total de centrais cadastradas',
      FILTER_BY_MAC: 'Filtrar por endereço MAC',
      FILTER_BY_MODEL_ID: 'Filtrar por ID do modelo',
      NAME: {
        example: 'Central 1',
        description: 'Nome da Central',
      },
      MAC: {
        example: '10:E0:09:00:50:00',
        description: 'Endereço MAC único da central',
      },
      MODEL_ID: {
        example: 2,
        description: 'ID do modelo associado à central',
      },
    },
    events: {
      NEW_CENTRAL_AVAILABLE: 'Nova central adicionada:',
      CENTRAL_REMOVED: 'Uma central foi removida'
    },
    validators: {
      NOT_NULL: 'Obrigatório preencher o campo',
      NAME: {
        type: 'Campo nome deve ser do tipo string',
        required: 'Obrigatório preencher o campo name',
      },
      MAC: {
        type: 'Campo MAC deve ser do tipo string',
        required: 'Obrigatório preencher o campo MAC',
        format: 'Formato do MAC enviado é inválido',
      },
      MODEL_ID: {
        type: 'Campo modelId deve ser do tipo number',
        required: 'Obrigatório preencher o campo modelId',
      },
    },
  },
};
