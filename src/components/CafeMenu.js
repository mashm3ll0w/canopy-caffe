import CafeItem from "./CafeItem";
import NewCafeItem from "./NewCafeItem";

export default function CafeMenu({ menu }) {
	return (
		<>
		<NewCafeItem />
			<div className="menu-container container-fluid">
				{menu.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			</div>
		</>
	);
}