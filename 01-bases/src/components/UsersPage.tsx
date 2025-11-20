import {UserRow} from "./UserRow.tsx";
import {useUsers} from "../hooks/useUsers.tsx";

export const UsersPage = () => {
    const {users, prevPage, nextPage} = useUsers();

    console.log(users);
    return (
        <div>
            <h3>UsersPage</h3>

            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <UserRow key={user.id} user={user}></UserRow>
                    ))
                }
                </tbody>
            </table>

            <div className="flex justify-between w-[500] mt-2">
                <button
                    className="p-2 bg-blue-500 text-white rounded-[10px]"
                    onClick={prevPage}
                >
                    Prev
                </button>
                <button
                    className="p-2 bg-blue-500 text-white rounded-[10px]"
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </div>
    )
};
