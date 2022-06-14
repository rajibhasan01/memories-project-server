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
          res.status(400).json({ message: "No post found" });
        }
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  } catch (error) {
    console.log("Error in add controller get route:", error);
  }
};

export const createPost = async (req: any, res: any) => {
  try {
    await postService
      .AddPost(req.body)
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "can't added the post" });
        }
      })
      .catch((error) => {
        res.status(404).json({ message: error.message });
      });
  } catch (error) {
    console.log("Error in add controller post route:", error);
  }
};
