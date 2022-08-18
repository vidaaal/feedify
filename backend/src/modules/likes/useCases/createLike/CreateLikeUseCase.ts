import { AppError } from '../../../../errors/AppError';
import { IPostsRepository } from '../../../posts/repositories/IPostsRepository';
import { CreateLikeDTO } from '../../dtos/CreateLikeDTO';
import { ILikesRepository } from '../../repositories/ILikesRepository';

class CreateLikeUseCase {
  private likesRepository: ILikesRepository;

  private postsRepository: IPostsRepository;

  constructor(
    likesRepository: ILikesRepository,
    postsRepository: IPostsRepository,
  ) {
    this.likesRepository = likesRepository;
    this.postsRepository = postsRepository;
  }

  async execute(data: CreateLikeDTO) {
    const post = await this.postsRepository.findById(data.post_id);

    if (!post) {
      throw new AppError('Post not found');
    }

    const likes = await this.likesRepository.findByPostId(data.post_id);

    const userAlreadyLiked = likes.find((like) => like.user_id === data.user_id);

    if (userAlreadyLiked) {
      await this.likesRepository.deleteById(data.post_id, userAlreadyLiked.id);

      return { message: 'Like removed' };
    }

    const like = await this.likesRepository.create(data);

    return like;
  }
}

export { CreateLikeUseCase };
