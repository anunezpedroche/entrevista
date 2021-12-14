import React, { useEffect } from 'react';

const HEADERS = ['ID','Name','Username','eMail']

const UsersTable = ({users, filter, userSearched}) =>{

    const handleInputChange = (value) =>{
        console.log(value.target.name);
        filter(value.target.value,value.target.name)
    };

    useEffect(()=>{
        console.log(userSearched);
    })

    return(
        <div>
            <table>
                <tbody>
                <tr key='headers'>
                    {HEADERS.map((header)=> <th>{header}</th>)}
                </tr>
                <tr key='headerFilter'>
                    {HEADERS.map((header)=> <th><input name={header} onChange={handleInputChange}/>{userSearched?<ul>{userSearched.map((user)=><li> {user.name} </li>)}</ul>:null}</th>)}
                </tr>
                {users.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );

};

export default UsersTable;