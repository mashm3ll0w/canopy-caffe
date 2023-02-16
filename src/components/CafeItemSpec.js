import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function CafeItemSpec({onAddToCart, onDeleteItem}) {
	const [item, setItem] = useState([]);
	const { id } = useParams();
  const navigate = useNavigate()

	useEffect(() => {
		fetch(`http://localhost:4000/inventory/${id}`)
			.then((res) => res.json())
			.then((data) => setItem(data))
			.catch((err) => console.log("Error: ", err.message));
	}, [id]);


  function handleDelete(){
    fetch(`http://localhost:4000/inventory/${item.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
      onDeleteItem(item)
      navigate("/menu")
    })
  }

  function handleBuy(){
    onAddToCart(item)
    navigate("/cart")
  }

	return (
		<div className="menu-container container-fluid">
			<div className="card" style={{ width: "25rem" }}>
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
						<button className="btn btn-primary" onClick={handleBuy}>
							Buy
						</button>
						<button className="btn btn-danger" onClick={handleDelete}>
							Delete
						</button>
            <Link className="btn btn-info" to="/menu">Back</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
