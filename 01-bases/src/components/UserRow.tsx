import type {User} from "../interfaces/reqres.response.ts";
import type {FC} from "react";

interface UserRowProps {
    user: User
}

export const UserRow:FC<UserRowProps> = ({user}) => {
    const {avatar, first_name, last_name, email} = user;

    return (
        <tr className="p-2">
            <td>
                <img
                    src={avatar}
                    className="rounded-full w-14 p-2"
                    alt="User Avatar"
                />
            </td>
            <td>
                {first_name} {last_name}
            </td>
            <td>{email}</td>
        </tr>
    )
};
