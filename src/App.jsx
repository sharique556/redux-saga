import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import React,{useEffect} from "react"
import { getUsersFetch } from './actions'

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.myFirstReducer.users)
  useEffect(()=>{
    dispatch(getUsersFetch())
  },[])

  // console.log("see saga --> ",users)
  return (
    <>
    <div >
      <h3>Fetching users with saga</h3>
      <div>{users.map((elem,index)=>{
        return (
          <div key={index}>{elem?.name}</div>
        )
      })}</div>
    </div>
    </>
  )
}

export default App
