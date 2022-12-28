import { useState } from "react";

let count = 0;
export const LogIn = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

console.log('rerender', count++)
const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`User Submitted: username : ${username} and password : ${password}`)
}


    return <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
        type="text"
        value={username}
        onChange={(event) => {
            setUsername(event.target.value)
        }}/>
        
<br /> <br /> <br />
        <label>password</label>
        <input type="password"
        value ={password}
        onChange= {(event) => {
            setPassword(event.target.value)
        }} />

        <div>
            <button style={{width: "100%"}} type="submit">Log in</button>
        </div>


        <hr /><hr /> <hr />
        <div>
            Username: {username}
        </div>

        <div>
            Password: {password}
        </div>

        <form action="submit"></form>
    </form>
}
