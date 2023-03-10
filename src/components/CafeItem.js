import { Link } from "react-router-dom";

export default function CafeItem({item}) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={item.poster_url} className="card-img-top" alt={item.name} />

			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				    <ul className="list-group list-group-flush">
				    	<li className="list-group-item">{item.description}</li>
					</ul>
				<Link to={`/menu/${item.id}`} className="btn btn-primary">
					Order
				</Link>
			</div>
		</div>
	);
}
