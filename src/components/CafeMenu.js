import CafeItem from "./CafeItem";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

export default function CafeMenu({ menu, handleSearch, filter }) {
	const navigate = useNavigate();
  const afterFilter = menu.filter((item)=>item.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  
	function handleClick(){
		navigate("/menu/new")
	}

	return (
		<>
     <Filter filter={filter} handleSearch={handleSearch} />
		 <div class="col text-center">
		   <button 
		   className="btn btn-custom" 
		   type="button" 
		   name="menu-button" 
		   onClick={handleClick}>CREATE NEW ITEM
			</button>
		</div>

		<div className="menu-container container-fluid">
				{afterFilter.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
		</div>
		</>
	);
}