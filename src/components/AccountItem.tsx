import { useNavigate } from "react-router-dom";
import { Account } from "../consts/interfaces"
import styles from '../styles/components/AccountItem.module.scss';

type ListProps = {
  account: Account,
  i: number
}

const AccountItem = ({account, i}: ListProps) => {
  const navigate = useNavigate()
  
  const toProfile = (id: number) => {
    navigate('/profile/' + id)
  }

  return (
    <div className={styles.item} style={{backgroundColor: i%2 ===0 ? 'white': '#eeeeee'}} onClick={() => toProfile(account.accountId)}>
      <div>{account.accountId}</div>
      <div>{account.email}</div>
      <div>{account.authToken}</div>
      <div>{account.creationDate}</div>
    </div>
  )
}

export default AccountItem