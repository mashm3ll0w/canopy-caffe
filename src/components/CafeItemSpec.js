export default function CafeItemSpec() {
	return (
		<div class="card" style="width: 18rem;">
			<img src="image-source" class="card-img-top" alt="image-name" />
			<div class="card-body">
				<h5 class="card-title">Food title</h5>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">Description</li>
					<li class="list-group-item">Size</li>
					<li class="list-group-item">Price KES</li>
				</ul>
				<a href="#" class="btn btn-primary">Add to Cart</a>
				<a href="#" class="btn btn-danger">Delete</a>
			</div>
		</div>
	);
}
