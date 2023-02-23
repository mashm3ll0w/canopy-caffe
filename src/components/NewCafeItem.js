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
    placeholder="Menu Name"
    onChange={handleChange}
    value={formData.name}
   />
</div>

<div class="col-sm">
 <input
   type="text"
   name="type"
   placeholder="Menu Type"
   onChange={handleChange}
   value={formData.type}
   />
</div>

<div class="col-sm">
 <input
   type="text"
   name="price"
   placeholder="Price in KES"
   onChange={handleChange}
   value={formData.price}
   />
</div>

<div class="col-sm">
  <input
   type="text"
   name="description"
   placeholder="Description"
   onChange={handleChange}
   value={formData.description}
   />
</div>

<div class="col-sm">
 <input
   type="text"
   name="poster_url"
   placeholder="Poster URL"
   onChange={handleChange}
   value={formData.poster_url}
  />
</div>

<div class="cool-auto">
<button type = "submit" class="btn btn-primary"> SUBMIT NEW ITEM </button>
</div>
</div>
</form>
);
}

export default NewCafeItem;   