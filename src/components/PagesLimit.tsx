import React, { useState } from "react"
import stylesBW from '../styles/components/BW/PagesLimitBW.module.scss'
import stylesPU from '../styles/components/PU/PagesLimitPU.module.scss'
import stylesAQ from '../styles/components/AQ/PagesLimitAQ.module.scss'

type ListProps = {
  limit: number,
  totalCount: number,
  setLimit: React.Dispatch<React.SetStateAction<number>>,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  style: string
}

const PagesLimit = ({ limit, totalCount, setLimit, setPage, style }: ListProps) => {
  const [vis, setVis] = useState(false)
  
  const pagesLimit: number[] = [5, 10, 20, totalCount]
  
  let styles: any
  if (style === 'bw') styles = stylesBW
  if (style === 'pu') styles = stylesPU
  if (style === 'aq') styles = stylesAQ

  const onLimit = (item: number) => {
    setVis(false);
    setLimit(item);
    setPage(1)
  }
  
  return (
    <div className={styles.pagesLimit} >
      <div className={styles.pagesLimit__title} onClick={() => setVis(!vis)} >Select by {limit}</div>
      {vis && 
      <div className={styles.pagesLimit__menu}>
        {pagesLimit.map(item => (
          <div className={styles.btn} key={item} onClick={() => onLimit(item)} >{item}</div>
        ))}
      </div>}
      
    </div>
  )
}

export default PagesLimit