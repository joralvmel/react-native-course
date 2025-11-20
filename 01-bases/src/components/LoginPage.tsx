import {useAuthContext} from "../context/AuthContext.tsx";

export const LoginPage = () => {
    const {user, isChecking, isAuthenticated, login, logout} = useAuthContext()

    if (isChecking) {
        return <h3>Checking authentication...</h3>
    }

    return (
        <>
            {isAuthenticated ? (
                <>
                    <h3>Welcome back, {user?.name}!</h3>
                    <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={()=>logout()}>Log out</button>
                </>
            ) : (
                <>
                    <h3>Please log in to continue.</h3>
                    <button className="bg-blue-500 p-2 text-white rounded-xl mt-2" onClick={()=>login('joralvmel@gmail.com', '1234')}>Log in</button>
                </>
            )}
        </>
    )
};
