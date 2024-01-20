import { Account } from "../consts/interfaces"
import AccountItem from "./AccountItem"
import styles from '../styles/components/AccountList.module.scss'
 
type ListProps = {
  accounts: Account[]
}

const AccountsList = ({accounts}:ListProps) => {
  
  return (
    <div className={styles.list}>
      {accounts.map((account: Account, i: number )=>(
        <AccountItem key={account.accountId} account={account} i={i}/>
      ))}
    </div>
  )
}

export default AccountsList