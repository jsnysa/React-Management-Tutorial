import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  id : 1,
  image : 'https://placeimg.com/64/64/1',
  name : '홍길동',
  birthday : '961213',
  gender : '남자',
  job : '대학생',
},
{
  id : 2,
  image : 'https://placeimg.com/64/64/2',
  name : '이순신',
  birthday : '961212',
  gender : '남자',
  job : '대학생',
},
{
  id : 3,
  image : 'https://placeimg.com/64/64/3',
  name : '최영',
  birthday : '961211',
  gender : '남자',
  job : '대학생',
},
]
class App extends React.Component {
  render () {
    return (
      <div>
        {
          customers.map(c => { return (
            <Customer 
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
          })
        }
        
        
      </div>
      
    );
  }
}

export default App;
