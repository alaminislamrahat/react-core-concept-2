import { useEffect, useState } from "react"
import Friend from "./frind"
import './friends.css'

export default function Friends(){
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
        
    },[])
    return (
        <div className="st">
            <h3>Friends {friends.length}</h3>
            {
                friends.map(friend => <Friend friend = {friend}></Friend>)
            }
        </div>
    )
}