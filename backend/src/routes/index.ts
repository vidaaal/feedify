import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreatePostController } from '../modules/posts/useCases/CreatePostController';
import { AuthWithCredentialsController } from '../modules/users/useCases/authWithCredentials/AuthWithCredentialsController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

const router = Router();

const createUserController = new CreateUserController();
const authWithCredentails = new AuthWithCredentialsController();
const createPostController = new CreatePostController();

router.post('/users', createUserController.handle);

router.post('/auth', authWithCredentails.handle);

router.post('/posts', ensureAuthenticated, createPostController.handle);

export { router };
