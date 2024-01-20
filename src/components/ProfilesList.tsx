import { Profile } from "../consts/interfaces"
import ProfileItem from "./ProfileItem"
import styles from '../styles/components/ProfileList.module.scss'

type ListProps = {
  profiles: Profile[]
}

const ProfilesList = ({ profiles }: ListProps) => {

  return (
    <div className={styles.list}>
      {profiles.map((profile: Profile, i: number) => (
        <ProfileItem key={profile.profileId} profile={profile} i={i} />
      ))}
    </div>
  )
}

export default ProfilesList