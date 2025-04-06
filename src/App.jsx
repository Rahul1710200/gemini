import Main from "./Components/Main/Main"
import Sidebar from "./Components/Sidebar/Sidebar"



function App() {


  
  return (
     <div>


     
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
