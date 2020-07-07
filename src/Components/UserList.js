import React from 'react'

const UserList = ({users}) => {
    console.log(users)
    return(
       <ul>
           {users && users.map(user => 
                 <>
                 <li>name: {user.name}</li>
                 <li>userName: {user.username}</li> 
                 <li>email: {user.email}</li>  
                 <li>address: <ul>
           <li>street: {user.address.street}</li>
           <li>suite: {user.address.suite}</li>
           <li>city: {user.address.city}</li>
           <li>zip code: {user.address.zipcode}</li>
           <li>geo: <ul>
           <li>lat: {user.address.geo.lat}</li>
           <li>lng: {user.address.geo.lng}</li>
               </ul></li>
                     </ul></li>
           <li>phone: {user.phone}</li>     
           <li>website: {user.website}</li>   
           <li>company: 
               <ul>
           <li>name: {user.company.name}</li>
           <li>cachtPhrase: {user.company.cachtPhrase}</li>
           <li>bs: {user.company.bs}</li>
               </ul>
               
               </li>    
               <hr/>     
                 </>          
           )}
       </ul>
    )
}



export default UserList