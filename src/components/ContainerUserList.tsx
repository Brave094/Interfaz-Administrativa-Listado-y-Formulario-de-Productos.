import { UserList } from "@/components/UserList";
import { useEffect, useState } from 'react'


export const ContainerUserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers =  async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums')
            const data = await response.json()
            setUsers(data)
        }

        fetchUsers()
    }, [])


    const handleuserClick = (user: any) => {
        alert(`You clicked on ${user.name}`)
    }
    return (
        <>
            <UserList users={users} onUsersClick={handleuserClick}/>
        </>
    )

}