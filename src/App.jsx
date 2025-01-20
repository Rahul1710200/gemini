import Main from "./Components/Main/Main"
import Sidebar from "./Components/Sidebar/Sidebar"
import { SignedIn, SignedOut, SignInButton,UserButton } from "@clerk/clerk-react";



function App() {


  
  return (
     <div>
      {/* <SignedOut>
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-3xl mb-8">Please Sign In</h1>
          <SignInButton className="px-6 py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Sign In
          </SignInButton>
        </div>
      </SignedOut> */}

     
        <div className="relative">
          {/* UserButton positioned at the top with z-index */}
          <div className="absolute top-4 right-4 z-10">
            {/* <UserButton /> */}
          </div>
          <div className="flex">
            <Sidebar />
            <Main />
          </div>
        </div>
      
    </div>
  )
}

export default App
