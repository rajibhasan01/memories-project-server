import express from 'express';

import { getPosts, createPost } from '../../controllers/post/controller.post';

const postRoute = express.Router();

postRoute.get('/', getPosts);
postRoute.post('/', createPost);

export = postRoute;
