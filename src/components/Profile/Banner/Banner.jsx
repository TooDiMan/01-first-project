import background from '../../../images/background.png'
import s from './Banner.module.css'

const Banner = (props) => {
  return (
    <div className={s.banner}>
      <img className={s.backgroundImg} src={background} />
    </div>
  );
}

export default Banner;