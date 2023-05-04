import { MongoClient, ServerApiVersion } from 'mongodb';
import Config from '../../config/Config';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class MongoDb {
  uri = `mongodb+srv://${Config.MONGO_DB_USERNAME}:${Config.MONGO_DB_PASSWORD}@cluster0.jftkiye.mongodb.net/?retryWrites=true&w=majority`;
  client: MongoClient;
  constructor() {
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  async connect() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await this.client.connect();
      // Send a ping to confirm a successful connection
      await this.client.db('admin').command({ ping: 1 });
      console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } finally {
      // Ensures that the client will close when you finish/error
      await this.client.close();
    }
  }
}

export const mongoDb = new MongoDb();
