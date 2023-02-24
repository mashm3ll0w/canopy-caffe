import React,{ useState } from "react";  
import { useNavigate } from "react-router-dom";  

const formStyle = {
	width: "40%",
  border: "grey solid 1px",
  borderRadius: "11px",
  padding: "40px"
};

function NewCafeItem({ onAddToMenu}) { 
  const navigate = useNavigate();
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
      navigate(`/menu/${newItem.id}`)
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
  <>

		<div className="form-container container-fluid" style={formStyle}>

      <section>
       <h2>READY FOR A NEW GRUB ADVENTURE?</h2>
        <span><label htmlFor = "name"> GrandPa Rick wants you to wistfully conceive the next Interdimensional Menu Hit for Canopy Caffe to Suit Your Fancy!</label></span>
        <span><label htmlFor = "name"> Don't be wicked Morty, You got this! </label></span>
      </section>

      <form className="row gy-2 gx-3 align-items-left">
				<div className="mb-3">
					<label htmlFor="menuName" className="form-label">
						Menu Name
					</label>
					<input type="text" id="menuName" className="form-control" name="name" placeholder="Enter Name" onChange={handleChange} value={formData.name} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuType" className="form-label">
						Menu Type
					</label>
					<select id="menuType" name="type" className="form-select" defaultValue={"default"} onChange={handleChange} value={formData.type}>
            <option value={"default"}> Choose an option </option>
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
					<select id="menuSize" name="size" className="form-select" defaultValue={"default"}  onChange={handleChange} value={formData.size}>
            <option value={"default"}> Choose an option </option>
            <option value="large">Large</option>
						<option value="medium">Medium</option>
						<option value="small">Small</option>
					</select>
				</div>

				<div className="mb-3">
					<label htmlFor="menuPrice" className="form-label">
						Price in KES
					</label>
					<input id="menuPrice" type="number" className="form-control" name="price" placeholder="Enter Price" onChange={handleChange} value={formData.price} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuDescription" className="form-label">
						Description
					</label>
					<input id="menuDescription" type="text" className="form-control" name="description" placeholder="Enter Item Description" onChange={handleChange} value={formData.description} />
				</div>

				<div className="mb-3">
					<label htmlFor="menuImage" className="form-label">
						Image
					</label>
					<input id="menuImage" type="text" className="form-control" name="poster_url" placeholder="Dunk on A Morty Character" onChange={handleChange} value={formData.poster_url} />
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
    </>
	);
}

export default NewCafeItem;   