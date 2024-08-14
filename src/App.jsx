import { useState, useEffect } from 'react'
import Poke from './components/Poke'

function App() {

  const [temp, setTemp] = useState(0)
  const [tempKTM, setTempKTM] = useState(0)


  const url='http://api.weatherapi.com/v1/current.json?key=294dd4cd5ac842978a7102024241408&q=London&aqi=yes'
  const KTMu="http://api.weatherapi.com/v1/current.json?key=294dd4cd5ac842978a7102024241408&q=Kathmandu&aqi=yes"

  useEffect (() => {
    const fetchData = async () => {
      const result = await fetch(url)
      result.json()
      .then(json =>{
        setTemp(json.current.temp_c)})
      .catch(err=>console.log(err))
    }
    fetchData();
  },[] )

  useEffect(() => {
    const Data = async () =>{
      const KTM =await fetch(KTMu)
      KTM.json()
      .then( json => {
        setTempKTM(json.current.temp_c)
      })
    }
    Data()
  },[])

  return (
    <div className='App'>
      <h1>
        London Temp Now: {temp}c
      </h1>

      <h1>
      Kathmandu Temp Now: {tempKTM}c
      </h1>

    </div>
    
  )
}

export default App
