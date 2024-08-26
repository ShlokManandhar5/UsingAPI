import React, { useEffect, useState } from 'react'
import data from './data'

const SortDate = () => {
    const [dateList, setDateList] = useState([])

    useEffect(() => {
      setDateList(data)
    },[])

    useEffect(() => {
        const sortdate =() => {
            dateList.sort((a,b)=> new Date(a.date)- new Date(b.date))
            console.log(dateList);
            
          }
          sortdate()
    },[])
    
    

    return (
        <div>
            <h1>Date Sort</h1>
            <select>
                {
                    dateList.map((items,index=id) => {
                        return( 
                            <option>{items.date}</option> 
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SortDate
