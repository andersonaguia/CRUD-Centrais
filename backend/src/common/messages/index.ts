export const Messages = {
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
      INTERNAL_SERVER_ERROR: 'Erro interno ao tentar cadastrar a central',
      CREATED_SUCCESS: 'Created',
      MAC_NOT_UNIQUE: 'Já existe uma central cadastrada com o endereço MAC:',
      BAD_REQUEST: 'Bad Request',
      CONFLICT: 'Conflict',
      ID_NOT_FOUND_ERROR: 'Nenhuma central encontrada para o id',
      NOT_FOUND: 'Not Found',
      OK: 'ok',
    },
    docs: {
      API_TAG: 'Centrals',
      CREATE_SUMMARY: 'Cadastrar uma nova central',
      FIND_ONE_SUMMARY: 'Obter os dados de uma central por ID',
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
    validators: {
      NOT_NULL: 'Obrigatório preencher o campo',
      NAME: {
        type: 'Campo nome deve ser do tipo string',
        required: 'Obrigatório preencher o campo name',
      },
      MAC: {
        type: 'Campo MAC deve ser do tipo string',
        required: 'Obrigatório preencher o campo MAC',
      },
      MODEL_ID: {
        type: 'Campo modelId deve ser do tipo number',
        required: 'Obrigatório preencher o campo modelId',
      },
    },
  },
};
