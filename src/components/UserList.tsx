interface User {
    id: string | number
    name: string
}

interface UsersProps {
    users: User[]
    onUsersClick: (user: User) => void
}


export const UserList = ({users, onUsersClick}: UsersProps ) => {
    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => onUsersClick(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}