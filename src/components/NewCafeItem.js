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

<form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit} >  
<span><label htmlFor = "name"> GrandPa Rick needs you to wistfully go on an adventure to conceive the next Interdimensional Menu Hit to Suit Your Fancy!</label></span> 
<span><label htmlFor = "name"> Be good Morty, You got this! </label></span>

<div className="row g-3">
 <div className="col-sm-4"> 
  <input
    type="text"
    className="form-control"
    name="name"
    placeholder="Menu Name"
    onChange={handleChange}
    value={formData.name}
   />
</div>

<div className="col-sm">
 <input
   type="text"
   className="form-control"
   name="type"
   placeholder="Menu Type"
   onChange={handleChange}
   value={formData.type}
   />
</div>

<div className="col-sm">
 <input
   type="text"
   className="form-control"
   name="price"
   placeholder="Price in KES"
   onChange={handleChange}
   value={formData.price}
   />
</div>

<div className="col-sm">
  <input
   type="text"
   className="form-control"
   name="description"
   placeholder="Description"
   onChange={handleChange}
   value={formData.description}
   />
</div>

<div className="col-sm">
 <input
   type="text"
   className="form-control"
   name="poster_url"
   placeholder="Poster URL"
   onChange={handleChange}
   value={formData.poster_url}
  />
</div>

<div className="col-auto">
<button type = "button" className ="btn btn-primary"> SUBMIT NEW MORTY ITEM </button>
</div>

</div>
</form>
);
}

export default NewCafeItem;   