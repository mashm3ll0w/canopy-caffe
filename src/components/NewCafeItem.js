import React,{ useState } from "react";    

function NewCafeItem({ onAddToMenu}) { 
const [formData, setFormData] = useState({
    name: "", 
    type: "",
    price:"",
    size:"", 
    description:"",
    poster_url: "",   
  });  

  function handleSubmit(e){
  console.log("Submitting form data");
  }

  function handleChange(e){
  console.log("Changing form data")
  }

return (
<form className="NewItem" onSubmit={handleSubmit}>   

<div class="row g-3">
 <div class="col-sm-7"> 
  <input
    type="text"
    name="name"
    placeholder="Enter Menu Name"
    onChange={handleChange}
    value={formData.name}
   />
</div>

<div class="col-sm">
 <input
   type="text"
   name="type"
   placeholder="Enter Menu Type"
   onChange={console.log('form')}
   value={handleChange}
 />
</div>

<input
  type="text"
  name="price"
  placeholder="Enter Price in KES"
  onChange={console.log('form')}
  value={handleChange}
/>

<input
  type="text"
  name="description"
  placeholder="Enter Description"
  onChange={console.log('form')}
  value={handleChange}
/>

<input
  type="text"
  name="poster_url"
  placeholder="Enter Poster URL"
  onChange={handleChange}
  value={formData.poster_url}
/>

<button type = "submit"> SUBMIT </button>
</div>
</form>
);
}

export default NewCafeItem;   