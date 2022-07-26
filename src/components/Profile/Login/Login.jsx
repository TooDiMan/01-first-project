import s from '../Login/Login.module.css'
import MyPost from '../MyPost/MyPosts'


const Login = (props) => {
  return (
    <div className={s.login}>
      <p>{props.loginName}</p>
      <MyPost />
    </div>
  );
}

export default Login;