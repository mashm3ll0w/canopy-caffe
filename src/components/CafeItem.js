export default function CafeItem() {
	return (
		<div class="card" style={{ width: "18rem" }}>
			<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" class="card-img-top" alt="..." />
			<div class="card-body">
				<h5 class="card-title">FOOD TITLE</h5>
				<a href="/menu" class="btn btn-primary">
					Order
				</a>
			</div>
		</div>
	);
}
