import React from 'react';
import Card from '../components/Card';


const CardArray = ({robots}) =>  {
  return (
      <div>
          {
            robots.map( (user, index) =>  {
              return (
                <Card 
                  key={index} 
                  id={user.id} 
                  name={user.name} 
                  email={user.email} 
                />
              ) 
            })
          }
      </div>
  );
}

export default CardArray;