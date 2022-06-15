import { DbPost } from "./db.post";
import { Post } from "../../model/model.post";
import { PostInterface } from "../../interfaces/interface.post";
import { rejects } from "assert";

const dbPost = DbPost.getInstance();

export class PostService implements PostInterface {
  public static postService: PostService;
  private constructor() {}
  public static getInstance() {
    if (!PostService.postService) {
      PostService.postService = new PostService();
    }
    return PostService.postService;
  }
  public AddPost(postData: Post) {
    try {
      return new Promise(async (resolve, reject) => {
        await dbPost
          .CreatePost(postData)
          .then((res) => resolve("Post added Successfully"))
          .catch((err) => reject("Failed to add post. Please try again"));
      }).catch((error) => {
        console.log("Error in AddPost method of PostService class: ", error);
        throw error;
      });
    } catch (error) {
      console.log("Error in AddPost method of PostService class: ", error);
    }
  }
  public GetPostList() {
    try {
      return new Promise(async (resolve, reject) => {
        await dbPost
          .GetPostList()
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }).catch((error) => {
        console.log(
          "Error in GetPostList method of PostService class: ",
          error
        );
        throw error;
      });
    } catch (error) {
      console.log("Error in GetPostList method of PostService class: ", error);
    }
  }
}
