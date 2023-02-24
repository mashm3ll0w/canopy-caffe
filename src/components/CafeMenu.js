import CafeItem from "./CafeItem";
import { useNavigate } from "react-router-dom";

export default function CafeMenu({ menu }) {
	const navigate = useNavigate();

	function handleClick(){
		navigate("/menu/new")
	}

	return (
		<>
		 <div class="col text-center">
		   <button 
		   className="btn btn-custom" 
		   type="button" 
		   name="menu-button" 
		   onClick={handleClick}>CREATE NEW ITEM
			</button>
		</div>

		<div className="menu-container container-fluid">
				{menu.map((item) => (
				<CafeItem key={item.id} item={item} />
				))}
		</div>
		</>
	);
}