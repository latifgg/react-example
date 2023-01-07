import React from 'react'


const PersonList = ({okkes}) => {
  return (
    <>
     <ul>
        {okkes.map((person) => {
          return (
            <li>
              {person.firstname} {person.lastname}
              <ul>
                {person.children.map((child) => {
                  return (
                    <li> {child.firstname} {child.lastname}</li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default PersonList