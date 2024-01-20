import { Compaign } from '../consts/interfaces';
import CompaignItem from "./CompaignItem"
import styles from '../styles/components/CompaignList.module.scss'

type ListProps = {
  compaigns: Compaign[]
}

const ProfilesList = ({ compaigns }: ListProps) => {

  return (
    <div className={styles.list}>
      {compaigns.map((compaign: Compaign, i: number) => (
        <CompaignItem key={compaign.compaignId} compaign={compaign} i={i} />
      ))}
    </div>
  )
}

export default ProfilesList