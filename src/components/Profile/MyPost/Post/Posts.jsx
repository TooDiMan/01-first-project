import s from './Posts.module.css';
import AvatarLogo from '../../../../images/avatarLogo.png'


const Posts = (props) => {
  return (
    <div className={s.post}>
      <img src={AvatarLogo} />
      <span>{props.message}</span>
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Posts;