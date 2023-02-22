import { Link } from "react-router-dom";

export default function Cart({ cart, onRemoveFromCart }) {
	function handleRemove(item) {
		onRemoveFromCart(item);
	}

	const totalPrice = cart.reduce((acc, item) => {
		acc += item.price;
		return acc;
	}, 0);

	const cartItems = cart.map((item) => {
		return (
			<div className="card" style={{ width: "20rem" }} key={item.id}>
				<img src={item.poster_url} className="card-img-top" alt={item.name} />
				<div className="card-body">
					<h5 className="card-title" style={{ textTransform: "uppercase", fontWeight: "bold" }}>
						{item.name}
					</h5>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{item.description}</li>
						<li className="list-group-item">{item.size}</li>
						<li className="list-group-item">KES. {item.price}</li>
						<li></li>
					</ul>
					<div className="spec-buttons">
						<button className="btn btn-danger" onClick={() => handleRemove(item)}>
							Remove
						</button>
						<Link className="btn btn-info" to="/menu">
							Main Menu
						</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<>
			{cart.length !== 0 ? (
				<>
					<h1 style={{ textAlign: "center" }}>Items in your Cart: {cart.length}</h1>
					<h1 style={{ textAlign: "center" }}>Total Price: KES. {totalPrice}</h1>
				</>
			) : (
				<h1 style={{ textAlign: "center" }}>Buy Something!</h1>
			)}
			<div className="menu-container container-fluid">{cartItems}</div>
		</>
	);
}
