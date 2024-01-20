import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addProfile, setTotalCount } from '../store/ProfilesSlice';
import { getOneProfile, getAllProfile } from '../API/api';
import { Profile } from '../consts/interfaces';
import { filtered, sorted } from '../utils/functionsAPI';
import ProfilesList from '../components/ProfilesList';
import Pages from '../components/Pages';
import Filter from '../components/Filter';
import { useParams } from 'react-router-dom';
import styles from '../styles/pages/Profiles.module.scss';

const Profiles: React.FC = () => {
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const {id} = useParams()

  const dispatch = useAppDispatch()

  const profiles = useAppSelector(state => state.profiles.value)
  const totalCount = useAppSelector(state => state.profiles.count)
  
  useEffect(() => {
    let data
    if(id) {
      data = getOneProfile(limit, page, Number(id))
    } else {
      data = getAllProfile(limit, page)
    } 
    dispatch(addProfile(data.row))
    dispatch(setTotalCount(data.totalCount))
  }, [page, limit, id])

  const profilesSorted: Profile[] = [...profiles]

  function filterProfile(array: any[], key: string, value: string | number) {
    if (value === 'reset') {
      setLimit(10)
      return
    }
    dispatch(addProfile(filtered(array, key, value)))
  }

  function sortedProfile(array: any[], key: string, dir: string) {
    dispatch(addProfile(sorted(array, key, dir)))
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title__row}>
            <div className={styles.title__text}>profileId</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedProfile(profilesSorted, 'profileId', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedProfile(profilesSorted, 'profileId', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>accountId</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedProfile(profilesSorted, 'accountId', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedProfile(profilesSorted, 'accountId', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>country</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedProfile(profilesSorted, 'country', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedProfile(profilesSorted, 'country', 'down')}></div>
            </div>
          </div>
          <div className={styles.title__row}>
            <div className={styles.title__text}>marketplace</div>
            <div className={styles.title__col}>
              <div className={styles.title__btnUp} onClick={() => sortedProfile(profilesSorted, 'marketplace', 'up')}></div>
              <div className={styles.title__btnDown} onClick={() => sortedProfile(profilesSorted, 'marketplace', 'down')}></div>
            </div>
          </div>
          
        </div>
        <div className={styles.title} style={{ position: 'relative' }}>
          <Filter array={profilesSorted} filterAccount={filterProfile} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'profileId'} style='pu' />
          <Filter array={profilesSorted} filterAccount={filterProfile} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'accountId'} style='pu' />
          <Filter array={profilesSorted} filterAccount={filterProfile} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'country'} style='pu' />
          <Filter array={profilesSorted} filterAccount={filterProfile} totalCount={totalCount} setLimit={setLimit} setPage={setPage} column={'marketplace'} style='pu' />
        </div>
        <ProfilesList profiles={profiles} />
      </div>

      <Pages page={page} setPage={setPage} limit={limit} totalCount={totalCount} setLimit={setLimit} style='pu' />
    </div>
  );
};

export default Profiles;