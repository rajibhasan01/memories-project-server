import { Post } from "../../model/model.post";
import { PostService } from "../../services/post/service.post";

const postService = PostService.getInstance();

export const getPosts = async (req: Request, res: any) => {
  try {
    await postService
      .GetPostList()
      .then((result:any) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(200).json({ message: "No post found" });
        }
      })
      .catch((error) => {
        res.status(409).json({ message: error.message });
      });
  } catch (error) {
    console.log("Error in add controller get route:", error);
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req:any, res: any) => {
  const data: Post = req.body;
  try {
    await postService
      .AddPost(data)
      .then((result) => {
        if (result) {
          res.status(201).json(result);
        } else {
          res.status(400).json({ message: "can't added the post" });
        }
      })
      .catch((error) => {
        res.status(409).json({ message: error.message });
      });
  } catch (error) {
    console.log("Error in add controller post route:", error);
    res.status(500).json({ message: error.message });
  }
};
