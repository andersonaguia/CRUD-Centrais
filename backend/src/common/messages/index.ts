export const Messages = {
  Model: {
    http: {
      INTERNAL_SERVER_ERROR: 'Erro interno ao buscar os modelos de central',
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
      CREATED_SUCCESS: 'Central cadastrada com sucesso!',
    },
    docs: {
      API_TAG: 'Centrals',
      CREATE_SUMMARY: 'Cadastrar uma nova central',
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
    validators: {},
  },
};
