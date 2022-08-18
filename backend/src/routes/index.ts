import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateLikeController } from '../modules/likes/useCases/createLike/CreateLikeController';
import { CreatePostController } from '../modules/posts/useCases/createPost/CreatePostController';
import { AuthWithCredentialsController } from '../modules/users/useCases/authWithCredentials/AuthWithCredentialsController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

const router = Router();

const createUserController = new CreateUserController();
const authWithCredentails = new AuthWithCredentialsController();
const createPostController = new CreatePostController();
const createLikeController = new CreateLikeController();

router.post('/users', createUserController.handle);

router.post('/auth', authWithCredentails.handle);

router.post('/posts', ensureAuthenticated, createPostController.handle);

router.post('/posts/likes/:post_id', ensureAuthenticated, createLikeController.handle);

export { router };
