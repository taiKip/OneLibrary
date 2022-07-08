import {useState} from 'react'
import BookForm from '../BookForm/BookForm'
import CardList from '../CardList/CardList'
import DashBoard from '../DashBoard/DashBoard'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import classes from './Container.module.css'

export type pageType = "DASHBOARD"|"ALLBOOKS"|"ADDBOOK"|"MEMBERS"
const Layout = () => {
  const [page, setPage] = useState<pageType>('DASHBOARD')
  const handleSwitchPage = (newPage:pageType) => {
setPage(newPage)
  }
  return (
      <div className={classes.container}>
      <Sidebar switchPage={handleSwitchPage} page={page}/>
      <Main role={"Admin"} page={page}>
        {(page === 'DASHBOARD') && <DashBoard />}    
        {(page === 'ADDBOOK') && <BookForm/>}    
        {(page === 'ALLBOOKS') && <CardList/>}    
        {(page === 'MEMBERS') && <div>MEMBERS</div>}    
      </Main>
    </div>
  )
}

export default Layout