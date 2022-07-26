import s from './AccLogo.module.css'
import profileImg from '../../../images/profileImg.png'

const AccLogo = () => {
    return (
        <div className={s.accLogo}>
            <img src={profileImg}/>
        </div>
    )
}
export default AccLogo;