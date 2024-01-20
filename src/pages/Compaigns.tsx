import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTotalCount, addCompaign } from '../store/CompaignsSlice';
import { getAllCompaign, getOneCompaign } from '../API/api';
import { Compaign } from '../consts/interfaces';
import { filtered, sorted } from '../utils/functionsAPI';
import CompaignsList from '../components/CompaignsList';
import Pages from '../components/Pages';
import Filter from '../components/Filter';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/Compaigns.module.scss';

const Compaigns: React.FC = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const {id} = useParams()

  const dispatch = useAppDispatch()

  const compaigns = useAppSelector(state => state.compaigns.value)
  const totalCount = useAppSelector(state => state.compaigns.count)

  useEffect(() => {
    let data
    if (id) {
      data = getOneCompaign(limit, page, Number(id))
    } else {
      data = getAllCompaign(limit, page)
    }
    dispatch(addCompaign(data.row))
    dispatch(setTotalCount(data.totalCount))
  }, [page, limit, id])

  const compaignSorted: Compaign[] = [...compaigns]

  function filterCompaign(array: any[], key: string, value: string | number) {
    if (value === 'reset') {
      setLimit(10)
      return
    }
    dispatch(addCompaign(filtered(array, key, value)))
  }

  function sortedAccount(array: any[], key: string, dir: string) {
    dispatch(addCompaign(sorted(array, key, dir)))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title__row}>
            <div className={styles.title__text}>compaignId</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedAccount(compaignSorted, 'compaignId', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedAccount(compaignSorted, 'compaignId', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>profileId</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedAccount(compaignSorted, 'profileId', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedAccount(compaignSorted, 'profileId', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>cliks</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedAccount(compaignSorted, 'cliks', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedAccount(compaignSorted, 'cliks', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>cost</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedAccount(compaignSorted, 'cost', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedAccount(compaignSorted, 'cost', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>date</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedAccount(compaignSorted, 'date', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedAccount(compaignSorted, 'date', 'down')}></div>
            </div>
          </div>
        </div>
        <div className={styles.title} style={{ top: 36 }}>
          <Filter array={compaignSorted} filterAccount={filterCompaign} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'compaignId'} style='aq' />
          <Filter array={compaignSorted} filterAccount={filterCompaign} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'profileId'} style='aq' />
          <Filter array={compaignSorted} filterAccount={filterCompaign} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'cliks'} style='aq' />
          <Filter array={compaignSorted} filterAccount={filterCompaign} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'cost'} style='aq'/>
          <Filter array={compaignSorted} filterAccount={filterCompaign} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'date'} style='aq' />
        </div>
        <CompaignsList compaigns={compaigns} />
      </div>

      <Pages page={page} setPage={setPage} limit={limit} totalCount={totalCount} setLimit={setLimit} style='aq' />
    </div>
  );
};

export default Compaigns;