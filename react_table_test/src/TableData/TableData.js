import React, { useState } from 'react';
import '../tabledata.css';
import data from '../data/data.json';
import styled from 'styled-components';
 

const Heading = styled.th`
width:50%;
border:none;
`;


const HeaderTable = styled.tr`
color: white;
background-color: #01987A;
`;


const MouseTr = styled.td`
color: red;
`;


const InputSearch = styled.input`
width: 40%;
margin-left: 5%;
`;



function TableData() {
    const [info, setInfo] = useState( []);
    const [infoUsers, setInfoUsers] = useState( data);
    const [name, setName] = useState('');
    const [field, setField] = useState('');

    const filterByName = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = data.filter((user) => {return user.firstName.toLowerCase().includes(keyword.toLowerCase()); });
            setInfoUsers(results);
          }else {setInfoUsers(data);}
        setName(keyword);
      };

      const filterByAllFields = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = data.filter((user) => {return (user.firstName.toLowerCase().includes(keyword.toLowerCase()) ||  user.phoneNumber.includes(keyword) 
                ||  user.emailAddress.toLowerCase().includes(keyword)  ||  user.lastName.toLowerCase().includes(keyword.toLowerCase())      )   });
            setInfoUsers(results);
          }else {setInfoUsers(data);}
        setField(keyword);
      };


    return (        
        <>    
       
        <Heading>             
            <InputSearch
        type="search"
        value={name}
        onChange={filterByName}
        className="input"
        placeholder="Filtrar por el Nombre del Usuario"
      />
       <InputSearch
        type="search"
        value={field}
        onChange={filterByAllFields}
        className="input"
        placeholder="Filtrar por Cualquier Campo del Usuario"
      /></Heading>
        <tbody>
            <HeaderTable>
                <th >User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </HeaderTable>
            {infoUsers.map((item, i) => (                           
             <tr key={i}  onClick={() => setInfo(item)}>
                    <td>{item.userId}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.emailAddress}</td>
                </tr>
            ))

            
            
            }
        </tbody>
          <p>Informacion Usuario </p>
          <p> UserID: {info.userId} </p>
          <p> Name {info.firstName} </p>
          <p> Fisrt Name {info.lastName} </p>
          <p> Telephone {info.phoneNumber} </p>
          <p> Email {info.emailAddress}  </p>
    </>
    );



}
 
export default TableData;