import React from 'react';
import Character from './Character'


const App = ({side}) => {
    if (!side) {
        side = 'light'
    }


const  characters = [
    {name: 'Дарт Вэйдер', side:'dark'},
    {name: 'Люк Скайворкер', side:'light'},
    {name: 'Йода', side:'light'},
    {name: 'Палпатин', side:'dark'},
    {name: 'Квай Гон', side:'light'}
]

const filteredList = characters.filter(char => char.side === side)

  return (       
                <ul>
                    {filteredList.map((char,index) =>  (
                            <Character key={char.name +index} name={char.name} side ={char.side}/>            
                    ))}
                </ul>      
  )

}
export default App