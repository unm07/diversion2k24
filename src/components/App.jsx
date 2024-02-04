import React from "react";

function App() {
    const [fullName,setName]=React.useState({
        fName: "",
        lName: ""
    });
    function handleF(event){
        const newValue=event.target.value;
        const inputName=event.target.name;
        setName(prevValue=>{
            if(inputName==="fName"){
                return{
                    fName: newValue,
                    lName: prevValue.lName
                }
            }
            else{
                return{
                    fName: prevValue.fName,
                    lName: newValue
                }
            }
        })
    }
    return (
    <div className="container">
      <h1>{fullName.fName+" "+fullName.lName}</h1>
      <form>
        <input 
        onChange={handleF}
        name="fName" placeholder="First Name" 
        value={fullName.fName} 
        />
        <input 
        onChange={handleF}
        name="lName" placeholder="Last Name" 
        value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
