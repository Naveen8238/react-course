import React, { useEffect, useState } from "react";

const Profile =()=>{
    let [data,setData]=useState([])
    const fetchApi = async (url)=>{
        try {
            const response = await fetch(url);
            const newdata = await response.json();
            setData(newdata);    
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchApi("https://jsonplaceholder.typicode.com/users")
    },[]);
    const profileStyles={
        display:"flex",
        placeItems:"center",
        flexWrap:'wrap'
    }

    return (
        <section style={profileStyles}>
            <h1>Hello world</h1>
            {
                data.map((item,index)=>{
                    return <Card data={item} key={index}/>
                })
            }
            
        </section>
    )
}
const Card = (props) => {
    const { email, name, id, phone, username, website } = props.data;
    const cardStyle = {
        width:"200px",
        listStyleType:"none",
        border: "2px solid red",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px"
    };
    return (
        <ul key={id} style={cardStyle}>
            <li>name:- {name}</li>
            <li>phone:- {phone}</li>
            <li>email:- {email}</li>
            <li>website:- {website}</li>
            <li>username:- {username}</li>
        </ul>
    );
};


export default Profile