import s from './MyPosts.module.css';
import AvatarLogo from '../../../images/avatarLogo.png'
import Posts from './Post/Posts';


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
        <Posts message='Hi, how are you?' likesCount='10'/>
        <Posts message='It`s my first post' likesCount='23'/>
        {/* <Posts />
        <Posts />
        <Posts /> */}
      </div>
    </div>
  );
}

export default MyPosts;