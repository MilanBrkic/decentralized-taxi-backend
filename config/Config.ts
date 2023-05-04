import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}
export default class Config {
  public static readonly MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
  public static readonly MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
  public static readonly MONGO_BASE_CONNECTION_URL = `mongodb+srv://${this.MONGO_DB_USERNAME}:${this.MONGO_DB_PASSWORD}@cluster0.jftkiye.mongodb.net/?retryWrites=true&w=majority`;
  public static readonly ALGO_NODE_WRITE_ONLY = process.env.ALGO_NODE_WRITE_ONLY ?? 'no';
  public static readonly ALGO_INDEXER_SERVER = process.env.ALGO_INDEXER_SERVER ?? 'http://reach-devnet-algo';
  public static readonly ALGO_SERVER = process.env.ALGO_SERVER ?? 'http://reach-devnet-algo';
  public static readonly ALGO_INDEXER_PORT = process.env.ALGO_INDEXER_PORT ?? '8980';
  public static readonly ALGO_PORT = process.env.ALGO_PORT ?? '52818';
  public static readonly ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
}

export const algorandConfig = {
  ALGO_NODE_WRITE_ONLY: Config.ALGO_NODE_WRITE_ONLY,
  ALGO_INDEXER_SERVER: Config.ALGO_INDEXER_SERVER,
  ALGO_SERVER: Config.ALGO_SERVER,
  ALGO_INDEXER_PORT: process.env.ALGO_INDEXER_PORT ?? '8980',
  ALGO_PORT: process.env.ALGO_PORT ?? '52818',
};
