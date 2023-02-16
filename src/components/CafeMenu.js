import CafeItem from "./CafeItem";

export default function CafeMenu({menu}) {
	return (
			<div className="menu-container container-fluid">
				{menu.map((item) => (
					<CafeItem key={item.id} item={item} />
				))}
			</div>
	);
}
