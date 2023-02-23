import CafeItem from "./CafeItem";
import NewCafeItem from "./NewCafeItem";

export default function CafeMenu({ menu, onAddToMenu }) {
	return (
		<>
		<NewCafeItem onAddToMenu={onAddToMenu}/>
			<div className="menu-container container-fluid">
				{menu.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			</div>
		</>
	);
}