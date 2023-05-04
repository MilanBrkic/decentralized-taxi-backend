export const algorandConfig = {
  ALGO_NODE_WRITE_ONLY: process.env.ALGO_NODE_WRITE_ONLY ?? 'no',
  ALGO_INDEXER_SERVER: process.env.ALGO_INDEXER_SERVER ?? 'http://reach-devnet-algo',
  ALGO_SERVER: process.env.ALGO_SERVER ?? 'http://reach-devnet-algo',
  ALGO_INDEXER_PORT: process.env.ALGO_INDEXER_PORT ?? '8980',
  ALGO_PORT: process.env.ALGO_PORT ?? '52818',
};
