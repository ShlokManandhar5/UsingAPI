import React, { useEffect } from 'react'

const Poke = () => {
    const pokeURL='https://pokeapi.co/api/v2/pokemon'

    useEffect (() => {
      const poke = async () => {
       const pokemon =await fetch(pokeURL)
        pokemon.json()
       .then(json =>{
        console.log(json)
       }) 
       .catch(err=>console.log(err))
      }
      poke()
    },[])


  return (
    <div>
      
    </div>
  )
}

export default Poke

    
