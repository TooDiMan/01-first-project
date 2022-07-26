import s from './Profile.module.css'
import Banner from "./Banner/Banner"
import Login from "./Login/Login"
import AccLogo from './AccLogo/AccLogo'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profileContent}>
                <Banner />
                <AccLogo />
                <Login loginName='Belarrius'/>
            </div>
        </div>
    );
}
export default Profile;