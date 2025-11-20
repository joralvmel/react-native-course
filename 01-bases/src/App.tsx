import {AuthProvider} from "./context/AuthContext.tsx";
import {FormsPage} from "./components/FormsPage.tsx";

// import {BasicTypes} from "./typescript/BasicTypes.tsx";
// import {ObjectLiterals} from "./typescript/ObjectLiterals.tsx";
// import {BasicFunctions} from "./typescript/BasicFunctions.tsx";
// import {Counter} from "./components/Counter.tsx";
// import {LoginPage} from "./components/LoginPage.tsx";
// import {UsersPage} from "./components/UsersPage.tsx";

function App() {

  return (
      <AuthProvider>
          <div className="flex flex-col justify-center items-center h-svh">
              <h1 className="text-4xl mb-5">React + TS!</h1>
              {/*<BasicTypes/>*/}
              {/*<ObjectLiterals/>*/}
              {/*<BasicFunctions/>*/}
              {/*<Counter/>*/}
              {/*<LoginPage/>*/}
              {/*<UsersPage/>*/}
              <FormsPage/>
          </div>
      </AuthProvider>
  )
}

export default App
