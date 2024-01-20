import { useNavigate } from 'react-router-dom'
import stylesBW from '../styles/components/BW/NameBW.module.scss'
import stylesPU from '../styles/components/PU/NamePU.module.scss'
import stylesAQ from '../styles/components/AQ/NameAQ.module.scss'

type ListProps = {
  name: string,
  style: string,
  path: string
}

const Name = ({ name, style, path }: ListProps) => {
  let styles: any
  if(style==='bw') styles = stylesBW
  if(style==='pu') styles = stylesPU
  if(style==='aq') styles = stylesAQ

  const navigate = useNavigate()

  const goto = () => {
    navigate(path)
  }

  return (
    <div className={styles.name} onClick={() => goto()}>
      <span style={{marginLeft: 10}}>{name}</span>
    </div>
  )
}

export default Name