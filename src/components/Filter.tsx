import React, { useState } from "react"
import stylesBW from '../styles/components/BW/FilterBW.module.scss'
import stylesPU from '../styles/components/PU/FilterPU.module.scss'
import stylesAQ from '../styles/components/AQ/FilterAQ.module.scss'

type ListProps = {
  array: any[],
  column: string,
  totalCount: number,
  setLimit: React.Dispatch<React.SetStateAction<number>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  filterAccount: (array: any[], key: string, value: string | number) => void,
  style: string
}

const Filter = ({ array, totalCount, setLimit, setPage, filterAccount, column, style}: ListProps) => {
  const [vis, setVis] = useState(false)
  
  let styles: any
  if(style==='bw') styles=stylesBW
  if(style==='pu') styles=stylesPU
  if(style==='aq') styles=stylesAQ
  
  const unicValue = Array.from(new Set(array.map(item => item[column])))

  const newarray = unicValue.map((item, i: number) => {
    let newItem = {
      id: i+1,
      value: item
    }
    return newItem
  })
  
  const sorted = (array: any[]) => {
    array.sort((a, b) => {
      if (a['value'] > b['value']) {
        return 1
      }
      if (a['value'] < b['value']) {
        return -1;
      }
      return 0;
    })
    return array
  }
  const arraySort = sorted(newarray)
    
  arraySort.unshift({ id: 0, value: "reset" })
  
  const onVis = (visible: boolean) => {
    if(visible) {
      setLimit(totalCount);
      setPage(1)
    }
    setVis(visible)
  }

  const onFilter = (item: number| string) => {
    filterAccount(array, column, item)
    setVis(false)
  }
  
  return (
    <div className={styles.filter} >
      <div className={styles.filter__title} onClick={() => onVis(!vis)} >
        <div className={styles.filter__title_text}>filter</div>
        {vis?
          <div className={styles.filter__title_iconUp}></div> 
          :<div className={styles.filter__title_iconDown}></div> 
        }
      </div>
      {vis &&
        <div className={styles.filter__menu}>
          {arraySort.map(item => (
            <div className={styles.btn} key={item.id} onClick={() => onFilter(item.value)} style={item.id===0? { textTransform: 'uppercase'}:{fontStyle: 'inherit'}} >{item.value}</div>
          ))}
        </div>}

    </div>
  )
}

export default Filter