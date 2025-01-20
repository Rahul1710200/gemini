import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import { Context } from "../Context/Context";
import './Sidebar.css'



function Sidebar() {
  
  const {
    Input,
    setInput,
    onSent,
    recentPrompt,
    setrecentprompt,
    prevPrompts,
    setprevPrompts,
    showResults,
    setshowResults,
    loading,
    setloading,
    resultData,
    setresultData,
  } = useContext(Context);

  const [extended, setextended] = useState(false);
 async function loadprompt(prompt){
    setrecentprompt(prompt);
   await onSent(prompt)
  }
 const reset=()=>{
  setresultData("");
  setshowResults(false);

 }


  //
    
  return (
    <div className="sidebar h-[80vh] w-fit  bg-[#F0F4F9]   ">
    <div className="top w-full h-full p-1 ">
    <img onClick={()=>setextended((prev)=>!prev)} className=" cursor-pointer m-[1.4vw] w-[1.4vw] h-[1.4vw]" src={assets.menu_icon}></img>
    <div onClick={()=>reset()} className=" newchat cursor-pointer new-chat w-fit  flex  gap-3 items-center justify-center  rounded-full bg-[#E6EAF1] p-[.7vw] mt-[3vw] ml-[.6vw]   ">
        <img className="w-[1.8vw] h-[1.8vw]" src={assets.plus_icon}></img>
        {extended?<p   className=" whitespace-nowrap  ">New Chat</p>:null}
    
    </div>
    {extended?
      <div className="recent flex flex-col p-4 gap-2 mt-[.7vw]  ">
        <p className="recent-title text-xl ml-3">Recent</p>
        <div className="recent-scroll-container max-h-[40vh] overflow-y-auto">
        {prevPrompts.map((item,index)=>{
          return(
            <div key={index} onClick={()=>loadprompt(item)} className="recent-entry animation max-h-[2vh]  hover:bg-[#E2E6EB]   rounded-full h-[2.3vw] px-4 py-6   flex  items-center mt-2 gap-2 ">
            <img className="w-[1.5vw] h-[1.6vw]" src={assets.message_icon}></img>
          
            <p id="recentProm" className=" ">
            {item.slice(0,18)}...</p>
        </div>
          )
          

        })}
        </div>
      
      
    </div>
    :null}
  
    </div>

    <div className="  flex flex-col   justify-end top w-full h-[20vh]   bg-[#F0F4F9]  ">
    
    <div className="cursor-pointer new-chat w-fit hover:bg-[#E2E6EB]   flex  gap-3 items-center justify-center  rounded-full p-[.7vw] mt-[3vw] ml-[.6vw]  transition-all">
      <img className="img1 w-[1.5vw] h-[1.6vw]" src={assets.question_icon} alt="question icon" />
      {extended?<p className="mr-5 font-serif text-xl">Help</p>:null}
      
    </div>

    <div className="  cursor-pointer new-chat w-fit hover:bg-[#E2E6EB]  flex  gap-3 items-center justify-center  rounded-full  p-[.7vw]  ml-[.6vw] ">
      <img className="img2 w-[1.5vw] h-[1.6vw]" src={assets.history_icon}></img>
      {extended?     <p className="font-serif text-xl" >Activity  </p>:null}
 
    </div>
    <div  className="cursor-pointer  new-chat w-fit hover:bg-[#E2E6EB]  flex  gap-3 items-center justify-center  rounded-full  p-[.7vw]  ml-[.6vw]">
      <img className="img3 w-[1.5vw] h-[1.6vw]" src={assets.setting_icon}></img>
      {extended?<p className="font-serif text-xl">Settings  </p>:null}
      
    </div>
    
    </div>

    
      
    </div>
  )
}

export default Sidebar
