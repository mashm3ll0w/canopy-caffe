import CafeItem from "./CafeItem";

export default function CafeMenu({ menu, onAddToMenu }) {
	return (
		<>
		   <button className="btn btn-custom" type="button" name="menu-button" onClick={handleClick}>EXPLORE</button>
			<div className="menu-container container-fluid">
				{menu.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			</div>
		</>
	);
}