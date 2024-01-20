import { useNavigate } from 'react-router-dom';
import { Profile } from '../consts/interfaces';
import styles from '../styles/components/ProfileItem.module.scss';

type ListProps = {
  profile: Profile,
  i: number
}

const ProfileItem = ({ profile, i }: ListProps) => {
  const navigate = useNavigate()
  
  const toCompaign = (id: number) => {
    navigate('/compaign/' + id)
  }

  return (
    <div className={styles.item} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f6dcf7' }} onClick={() => toCompaign(profile.profileId)}>
      <div>{profile.profileId}</div>
      <div>{profile.accountId}</div>
      <div>{profile.country}</div>
      <div>{profile.marketplace}</div>
    </div>
  )
}

export default ProfileItem