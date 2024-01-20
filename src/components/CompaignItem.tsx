import { Compaign } from "../consts/interfaces"
import styles from '../styles/components/CompaignItem.module.scss';

type ListProps = {
  compaign: Compaign,
  i: number
}

const CompaignItem = ({ compaign, i }: ListProps) => {
  
  return (
    <div className={styles.item} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#dcf7f7' }} >
      <div>{compaign.compaignId}</div>
      <div>{compaign.profileId}</div>
      <div>{compaign.cliks}</div>
      <div>{compaign.cost}</div>
      <div>{compaign.date}</div>
    </div>
  )
}

export default CompaignItem