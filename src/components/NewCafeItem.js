import React,{ useState } from "react";    

function NewCafeItem() { 
const [formData, setFormData] = useState({
    name: "", 
    type: "",
    price:"",
    size:"",
    description:"",
    poster_url: "",   
  });  

return (
<form className="NewItem" onSubmit={console.log('submit')}>    
{/* <label htmlFor="name"> Enter Name: </label> */}
  <input
      type="text"
      name="name"
      placeholder="Enter Name"
      onChange={console.log('form')}
      value={formData.name}
      />

    <input />
    <button />
</form>
);
}

export default NewCafeItem;   