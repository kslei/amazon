import React from "react"
import { getPageCount, getPagesArray } from "../utils/pages"
import PagesLimit from "./PagesLimit"
import stylesBW from '../styles/components/BW/PagesBW.module.scss'
import stylesPU from '../styles/components/PU/PagesPU.module.scss'
import stylesAQ from '../styles/components/AQ/PagesAQ.module.scss'

type ListProps = {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>> ,
  limit: number,
  totalCount: number,
  setLimit: React.Dispatch<React.SetStateAction<number>> ,
  style: string,
}

const Pages = ({page, setPage, limit, totalCount, setLimit, style}: ListProps) => {
  let totalPages = getPageCount(totalCount, limit)
  let pagesArray = getPagesArray(totalPages)
  
  let styles: any
  let background: string
  if(style==='bw') {
    styles = stylesBW
    background = '#6c6c6c'
  }
  if(style==='pu') {
    styles = stylesPU
    background = '#f55ffa'
  }
  if(style==='aq') {
    styles = stylesAQ
    background = '#20e0e3'
  }

  return (
    <div className={styles.pages}>
      <PagesLimit limit={limit} totalCount={totalCount} setLimit={setLimit} setPage={setPage} style={style}/>
      {pagesArray.map(item => (
        <div className={styles.btn} key={item} onClick={() => setPage(item)} style={{ background: page === item ? background: ''}}>{item}</div>
      ))}
    </div>
  )
}

export default Pages