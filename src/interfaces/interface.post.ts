import { Post } from "./../model/model.post";

export interface PostInterface {
    AddPost(postData: Post): any;
    GetPostList(): any;
}