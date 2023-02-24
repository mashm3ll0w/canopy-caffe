import CafeItem from "./CafeItem";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const searchStyle = {
	display: "flex",
	// padding: "20px",
	justifyContent: "center",
	// gap: "50px",
};

export default function CafeMenu({ menu, handleSearch, filter }) {
	const navigate = useNavigate();
	const afterFilter = menu.filter((item) => item.name.toLowerCase().includes(filter.toLocaleLowerCase()));

	function handleClick() {
		navigate("/menu/new");
	}

	return (
		<>
			<div class="col text-center" style={searchStyle}>
				<button className="btn btn-custom" type="button" name="menu-button" onClick={handleClick}>
					CREATE NEW ITEM
				</button>
				<Filter filter={filter} handleSearch={handleSearch} />
			</div>

			<div className="menu-container container-fluid">
				{afterFilter.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			</div>
		</>
	);
}
