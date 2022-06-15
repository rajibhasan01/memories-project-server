import { Post } from "../../model/model.post";
import { ObjectId, MongoClient } from "mongodb";
import { ConfigService } from "../utility/configService";

const config = ConfigService.getInstance().getConfig();

export class DbPost {
  private static dbPost: DbPost;
  private collectionName: string;

  constructor() {
    this.collectionName = "post";
  }
  /**
   * getInstance
   */
  public static getInstance() {
    if (!DbPost.dbPost) {
      DbPost.dbPost = new DbPost();
    }
    return DbPost.dbPost;
  }
  /**
   * DB Connection
   */
  private async getDbConnection() {
    const dbConnection = await new MongoClient(config.mongo.url).connect();
    return dbConnection;
  }
  /**
   * createPost
   */
  public async CreatePost(post: Post) {
    try {
      return await new Promise(async (resolve, reject) => {
        const dbConn = await this.getDbConnection();
        const db = dbConn.db(config.mongo.dbName);
        const dbCollection = db.collection(this.collectionName);
        post.createdAt = new Date();

        const result = await dbCollection.insertOne(post);
        if (result) {
          resolve(result);
        } else {
          reject(result);
        }
        await dbConn.close();
      }).catch((error) => {
        console.log("Error in CreatePost method of DbPost class: ", error);
        throw error;
      });
    } catch (error) {
      console.log(
        "Error in CreatePost method of DbPost class: ",
        error.message
      );
    }
  }
  /**
   * GetTransactionList
   */
  public GetPostList() {
    try {
      return new Promise(async (resolve, reject) => {
        const dbConn = await this.getDbConnection();
        const db = dbConn.db(config.mongo.dbName);
        const dbCollection = db.collection(this.collectionName);
        const result = await dbCollection.find().sort({ name: -1 }).toArray();
        if (result) {
          resolve(result);
        } else {
          reject("error getting ther Post");
        }
      }).catch((error) => {
        console.log("Error in GetPostList method of DbPost class: ", error);
        throw error;
      });
    } catch (error) {
      console.log(
        "Error in GetPostList method of DbPost class: ",
        error.message
      );
    }
  }
}
