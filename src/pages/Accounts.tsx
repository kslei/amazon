import React, {useState, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTotalCount, addAccount  } from '../store/AccountsSlice';
import { getAllAccounts } from '../API/api';
import { Account } from '../consts/interfaces';
import { filtered, sorted } from '../utils/functionsAPI';
import AccountsList from '../components/AccountsList';
import Pages from '../components/Pages';
import Filter from '../components/Filter';
import styles from '../styles/pages/Accounts.module.scss';

const Accounts: React.FC = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const dispatch = useAppDispatch()

  const accounts = useAppSelector(state => state.accounts.value)
  const totalCount = useAppSelector(state => state.accounts.count)
  
  useEffect(() => {
    const data = getAllAccounts(limit, page)
    dispatch(addAccount(data.row))
    dispatch(setTotalCount(data.totalCount))
  }, [page, limit])
  
  const accountsSorted: Account[] = [...accounts]

  function filterAccount(array: any[], key: string, value: string | number) {
    if(value === 'reset') {
      setLimit(10)
      return
    }
    dispatch(addAccount(filtered(array, key, value)))
  }

  function sortedAccount(array: any[], key: string, dir: string) {
    dispatch(addAccount(sorted(array, key, dir)))
  }

  return (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.title}>
        <div className={styles.title__row}>
          <div className={styles.title__text}>accountId</div>
          <div className={styles.title__col}>
            <div className={styles.title__btnUp} onClick={() => sortedAccount(accountsSorted, 'accountId', 'up')}></div>
            <div className={styles.title__btnDown} onClick={() => sortedAccount(accountsSorted, 'accountId', 'down')}></div>
          </div>
        </div>
        <div className={styles.title__row}>
          <div className={styles.title__text}>email</div>
          <div className={styles.title__col}>
            <div className={styles.title__btnUp} onClick={() => sortedAccount(accountsSorted, 'email', 'up')}></div>
            <div className={styles.title__btnDown} onClick={() => sortedAccount(accountsSorted, 'email', 'down')}></div>
          </div>
        </div>
        <div className={styles.title__row}>
          <div className={styles.title__text}>authToken</div>
          <div className={styles.title__col}>
            <div className={styles.title__btnUp} onClick={() => sortedAccount(accountsSorted, 'authToken', 'up')}></div>
            <div className={styles.title__btnDown} onClick={() => sortedAccount(accountsSorted, 'authToken', 'down')}></div>
          </div>
        </div>
        <div className={styles.title__row}>
          <div className={styles.title__text}>creationDate</div>
          <div className={styles.title__col}>
            <div className={styles.title__btnUp} onClick={() => sortedAccount(accountsSorted, 'creationDate', 'up')}></div>
            <div className={styles.title__btnDown} onClick={() => sortedAccount(accountsSorted, 'creationDate', 'down')}></div>
          </div>
        </div>
      </div>
        <div className={styles.title} style={{ position: 'relative' }}>
        <Filter array={accountsSorted} filterAccount={filterAccount} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'accountId'} style='bw' />
          <Filter array={accountsSorted} filterAccount={filterAccount} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'email'} style='bw' />
          <Filter array={accountsSorted} filterAccount={filterAccount} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'authToken'} style='bw' />
          <Filter array={accountsSorted} filterAccount={filterAccount} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'creationDate'} style='bw' />
      </div>
      <AccountsList accounts={accounts} />
    </div>
    <Pages page={page} setPage={setPage} limit={limit} totalCount={totalCount} setLimit={setLimit} style='bw' />
  </div>
  );
};

export default Accounts;