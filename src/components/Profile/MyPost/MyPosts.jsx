import s from './MyPosts.module.css';
import AvatarLogo from '../../../images/avatarLogo.png'
import Posts from './Post/Posts';

let postsData = [
  { id: 1, post: 'Hi, how are you?', like: 10 },
  { id: 2, post: 'It`s my first post', like: 23 },
  { id: 3, post: 'GG WP', like: 56 },
]

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <p>My posts</p>
      <div className={s.newPosts}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
        <Posts message={postsData[0].post} likesCount={postsData[0].like} />
        <Posts message={postsData[1].post} likesCount={postsData[1].like} />
        <Posts message={postsData[2].post} likesCount={postsData[2].like} />
      </div>
    </div>
  );
}

export default MyPosts;