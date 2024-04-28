import '../styles/categories.css'
import '../styles/tasks.css'

import searchIcon from '../images/search-icon.png'
import { useState } from 'react'
import CategoryGroup from './CategoryGroup'
import TaskGroup from './TaskGroup'
const Content = () =>{
    
    const [num, setNum] = useState(0)
    console.log(num)
    let condition = false
    if(num == 0){
    condition = true
    }
    
    const categories = ["Home", "Work", "Personal", "HouseHOld"]
    //refactor with new component for categoryGroup
    // minicomponents for subsequent buttons
    // tasks components
    return (
    <div className="content">
        <CategoryGroup categories = {categories}/>
        <TaskGroup num = {num} condition = {condition} addTask = {()=>{setNum(num+1)}}/>
    
    </div>
    )
}

export default Content