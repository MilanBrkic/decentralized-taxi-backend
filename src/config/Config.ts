import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}
export default class Config {
  public static readonly DRIVER_LOCATION_PING_INTERVAL = 5 * 1000;
  public static readonly LOCATION_SHARING_PING_INTERVAL = 5 * 1000;
  public static readonly MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
  public static readonly MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
  public static readonly MONGO_BASE_CONNECTION_URL = `mongodb+srv://${this.MONGO_DB_USERNAME}:${this.MONGO_DB_PASSWORD}@cluster0.jftkiye.mongodb.net/?retryWrites=true&w=majority`;
  public static readonly ALGO_NODE_WRITE_ONLY = process.env.ALGO_NODE_WRITE_ONLY ?? 'no';
  public static readonly ALGO_INDEXER_SERVER = process.env.ALGO_INDEXER_SERVER ?? 'http://reach-devnet-algo';
  public static readonly ALGO_SERVER = process.env.ALGO_SERVER ?? 'http://reach-devnet-algo';
  public static readonly ALGO_INDEXER_PORT = process.env.ALGO_INDEXER_PORT ?? '8980';
  public static readonly ALGO_PORT = process.env.ALGO_PORT ?? '52818';
  public static readonly ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
  public static readonly ADMIN_SECRET = process.env.ADMIN_SECRET;
  public static readonly ALGORAND_PROVIDER_NAME = process.env.ALGORAND_PROVIDER_NAME ?? 'TestNet';
  public static readonly FEE_PERCENTAGE = process.env.FEE_PERCENTAGE ? Number(process.env.FEE_PERCENTAGE) : 2;
  public static readonly DEPOSIT_PERCENTAGE = process.env.DEPOSIT_PERCENTAGE
    ? Number(process.env.DEPOSIT_PERCENTAGE)
    : 30;
  public static readonly RIDE_START_TIMEOUT = process.env.RIDE_START_TIMEOUT
    ? Number(process.env.RIDE_START_TIMEOUT)
    : 5 * 1000;

  public static readonly RIDE_START_WAITING_FOR_OTHER_USER_TIMEOUT = process.env
    .RIDE_START_WAITING_FOR_OTHER_USER_TIMEOUT
    ? Number(process.env.RIDE_START_WAITING_FOR_OTHER_USER_TIMEOUT)
    : 1000 * 1000;

  public static readonly RIDE_END_TIMEOUT = process.env.RIDE_END_TIMEOUT
    ? Number(process.env.RIDE_END_TIMEOUT)
    : 1000 * 1000;
  public static readonly LOCATION_SHARING_RADIUS = process.env.LOCATION_SHARING_RADIUS
    ? Number(process.env.LOCATION_SHARING_RADIUS)
    : 0.0005;
}

export const algorandConfig = {
  ALGO_NODE_WRITE_ONLY: Config.ALGO_NODE_WRITE_ONLY,
  ALGO_INDEXER_SERVER: Config.ALGO_INDEXER_SERVER,
  ALGO_SERVER: Config.ALGO_SERVER,
  REACH_CONNECTOR_MODE: 'ALGO',
  ALGO_INDEXER_PORT: process.env.ALGO_INDEXER_PORT ?? '8980',
  ALGO_PORT: process.env.ALGO_PORT ?? '52818',
};
