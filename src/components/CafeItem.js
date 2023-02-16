export default function CafeItem({item}) {
	return (
		<div class="card" style={{ width: "18rem" }}>
			<img src={item.poster_url} class="card-img-top" alt={item.name} />
			<div class="card-body">
				<h5 class="card-title">{item.name}</h5>
				<a href="/menu" class="btn btn-primary">
					Order
				</a>
			</div>
		</div>
	);
}
