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

<input
  type="text"
  name="name"
  placeholder="Enter Menu Name"
  onChange={console.log('form')}
  value={formData.name}
  />

<input
  type="text"
  name="type"
  placeholder="Enter Menu Type"
  onChange={console.log('form')}
  value={formData.type}
/>

<input
  type="text"
  name="price"
  placeholder="Enter Price in KES"
  onChange={console.log('form')}
  value={formData.price}
/>

<input
  type="text"
  name="description"
  placeholder="Enter Description"
  onChange={console.log('form')}
  value={formData.description}
/>

<input
  type="text"
  name="poster_url"
  placeholder="Enter Poster URL"
  onChange={console.log('form')}
  value={formData.poster_url}
/>

<button />
</form>
);
}

export default NewCafeItem;   