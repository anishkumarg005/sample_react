import React from "react";

const App = () => {
  const [formField, setFormField] = React.useState({
    username:"", 
    password: ""
  })
  const formFieldHandler = (e)=>{
    let name = e.target.name
    let value = e.target.value
    setFormField({...formField, [name]:value})
  }
  return (
    <form 
      onSubmit={(e)=>{
        e.preventDefault()
        console.log(formField)
      }}
      style={{
        marginTop: 50, 
        display: "flex", 
        flexDirection: "column"
      }}
     
    >
      <input 
        type="text"
        name="username" 
        value={formField.username} 
        onChange={formFieldHandler} 
        placeholder="Username"
        style={{
          padding: "10px 10px", 
          width: "80%", 
          maxWidth: 540, 
            
          margin: "5px auto"
        }}
      />
      <input 
        type="password" 
        name="password"
        value={formField.password} 
        onChange={formFieldHandler} 
        placeholder="Password"
        style={{
          padding: "10px 10px",
          width: "80%",
          maxWidth: 540,
          margin: "5px auto"
        }}
      />
      <button
        style={{width: 200, padding: 10, margin: "15px auto"}}
      >Submit</button>
    </form>
  );
};
export default App