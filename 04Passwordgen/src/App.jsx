import { useState ,useCallback, useEffect,useRef } from "react"

function App() {
  const [length,setlength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  //useref hook
  const passwordRef=useRef(null)
  

  const passwordGrenerator= useCallback(()=>{
    let pass=""
    let str="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*_+=[]{}~`"

    for(let i=0;i<length;i++){
      let char =Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);
    }
   
    setPassword(pass)
//these field is usefull for if the dependacy change password get change which means it rerun the funtion==>useCallback

//we put in array where where u have dependancy hain and possible run hoga and optimize method======>and these attribute present in catche for optimization purpose
  },[length,numberAllowed,charAllowed,setPassword])//if we give password instead of setpassword we get stuck in infinite loop
   //usecallback hook 
  
   //to call these passwordgrenerator we use useEffect hook
   useEffect(()=>{
    passwordGrenerator()

    //if somthing get change then rerun the method
   },[length,numberAllowed,charAllowed,passwordGrenerator])


  const copyPasswordToClipBoard=useCallback(()=>{


    //for user experienece it should have  
    passwordRef.current?.select();//optimize

    //tell range 
    passwordRef.current?.setSelectionRange(0,length);//not usefull but when range is fixed then use it ==>ex: for first some letters

    window.navigator.clipboard.writeText(password)
    //react==>window
    //nextJs==>server Side rendering---> all code run on server
  },[password])


  return (
    
    <>
   <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-2 py-3 my-8 text-orange-300 bg-gray-800 text-center text-xl">
   <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text"
      value={password}
      className="outline-none w-full py-1 px-3 "
      placeholder="Password"
      readOnly 
      ref={passwordRef}
      />

      <button 
      onClick={copyPasswordToClipBoard}
      className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1 text-xl">
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setlength(e.target.value)}}
         />
         <label >Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }} 
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 text-xl">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={()=>{
          setCharAllowed((prev)=>!prev)
        }} 
        />
        <label htmlFor="charInput">Character</label>
      </div>
      
    </div>
   </div>

    </>
  )
}

export default App
