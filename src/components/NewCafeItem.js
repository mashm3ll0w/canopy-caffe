import React,{ useState } from "react";    

const formStyle = {
	width: "40%",
  border: "grey solid 1px",
  borderRadius: "11px",
  padding: "40px"
};

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
   e.preventDefault();
   fetch("http://localhost:4000/inventory", {
    method:"POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
     name: formData.name, 
     type: formData.type,
     price:parseInt(formData.price),
     size:formData.size,
      description:formData.description,
      poster_url: formData.poster_url, 
    }),
    })
    .then((res) => res.json())
    .then((newItem) => {
      onAddToMenu(newItem)
      setFormData({
        name: "", 
        type: "",
        price:"",
        size:"",
        description:"",
        poster_url: "",   
      })
     }
    ) 
  }

  function handleChange(e){
    const name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value, 
    });
  }

return (
		<div className="form-container container-fluid" style={formStyle}>
			<form className="row gy-2 gx-3 align-items-center">
				<div className="mb-3">
					<label htmlFor="menuName" className="form-label">
						Menu Name
					</label>
					<input type="text" id="menuName" className="form-control" name="name" placeholder="" onChange={handleChange} value={formData.name} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuType" className="form-label">
						Menu Type
					</label>
					<select id="menuType" name="type" className="form-select" onChange={handleChange} value={formData.type}>
						<option value="Coffee">Coffee</option>
						<option value="Tea">Tea</option>
						<option value="Juice">Juice</option>
						<option value="Milkshake">Milkshake</option>
						<option value="Pastry">Pastry</option>
					</select>
				</div>
				
				<div className="mb-3">
					<label htmlFor="menuSize" className="form-label">
						Menu Size
					</label>
					<select id="menuSize" name="size" className="form-select" onChange={handleChange} value={formData.size}>
						<option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="small">Small</option>
					</select>
				</div>

				<div className="mb-3">
					<label htmlFor="menuPrice" className="form-label">
						Price in KES
					</label>
					<input id="menuPrice" type="number" className="form-control" name="price" placeholder="" onChange={handleChange} value={formData.price} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuDescription" className="form-label">
						Description
					</label>
					<input id="menuDescription" type="text" className="form-control" name="description" placeholder="" onChange={handleChange} value={formData.description} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuImage" className="form-label">
						Image
					</label>
					<input id="menuImage" type="text" className="form-control" name="poster_url" placeholder="" onChange={handleChange} value={formData.poster_url} />
				</div>

				<div className="col-auto">
					<button type="button" 
          onClick = {handleSubmit} 
          className="btn btn-primary">
						SUBMIT
					</button>
				</div>
			</form>
		</div>
	);
}


export default NewCafeItem;   