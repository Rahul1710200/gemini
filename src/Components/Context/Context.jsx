import { createContext, useState } from "react";
import runChat from "../../Config/gemini";


export const Context=createContext();

 export const ContextProvider=({children})=>{
    const [Input, setInput] = useState("");
    const [recentPrompt, setrecentprompt] = useState("");
    const [prevPrompts, setprevPrompts] = useState([]);
    const [showResults, setshowResults] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultData, setresultData] = useState("")

    const ondelay=(index,nextWord)=>{
        


        setTimeout(() => {
            setresultData(prev=>prev+nextWord);

            
        },75*index );
    }
  
    

    const onSent=async (prompt)=>{
        setresultData("");
        setloading(true);
        setshowResults(true);
        let response;
        if(prompt!=undefined){
             response= await runChat(prompt);
             setrecentprompt(prompt)

        }
        else{
            setprevPrompts(prev=>[...prev,Input])
            setrecentprompt(Input);
            response= await runChat(Input);
        }
        
       

      
       let responsearray=response.split("**");
       let newresponse="";
       for(let i=0; i<responsearray.length; i++){
        if(i==0 || i%2==0){
            newresponse +=responsearray[i];
        }
        else{
            newresponse +="<b>"+responsearray[i]+"</b>"
        }
         
       }
       const newresponse2=newresponse.split("*").join("</br>");
       const newresponseArray=newresponse2.split(" ");
       for(let i=0; i<newresponseArray.length; i++){
        const nextWord=newresponseArray[i];
        ondelay(i,nextWord+" ")


       }

       
       setloading(false);
       setInput("")

    }

    




    const contextValue={
        Input, setInput,
        onSent,
        recentPrompt, setrecentprompt,
        prevPrompts, setprevPrompts,
        showResults, setshowResults,
        loading, setloading,
        resultData, setresultData

    }

    
    return (
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;