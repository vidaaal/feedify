import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCommentController } from '../modules/comments/useCases/createComment/CreateCommentController';
import { FindAllCommentsController } from '../modules/comments/useCases/findAllPostComments/FindAllPostCommentsController';
import { CreateLikeController } from '../modules/likes/useCases/createLike/CreateLikeController';
import { CreatePostController } from '../modules/posts/useCases/createPost/CreatePostController';
import { FindAllPostsController } from '../modules/posts/useCases/findAllPosts/FindAllPostsController';
import { AuthWithCredentialsController } from '../modules/users/useCases/authWithCredentials/AuthWithCredentialsController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

const router = Router();

const createUserController = new CreateUserController();
const authWithCredentails = new AuthWithCredentialsController();

const findAllPosts = new FindAllPostsController();
const createPostController = new CreatePostController();

const createLikeController = new CreateLikeController();

const findAllPostCommentsController = new FindAllCommentsController();
const createCommentController = new CreateCommentController();

router.post('/users', createUserController.handle);

router.post('/auth', authWithCredentails.handle);

router.get('/posts', ensureAuthenticated, findAllPosts.handle);
router.post('/posts', ensureAuthenticated, createPostController.handle);

router.post('/posts/likes/:post_id', ensureAuthenticated, createLikeController.handle);

router.get('/posts/comments/:post_id', ensureAuthenticated, findAllPostCommentsController.handle);
router.post('/posts/comments/:post_id', ensureAuthenticated, createCommentController.handle);

export { router };
