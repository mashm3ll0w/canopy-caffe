import React from "react";

function App() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg">
				<div class="container-fluid nav-container">
					<a class="navbar-brand" href="/">
						Canopy.CAFFE
					</a>
					<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="/">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/menu">
									Menu
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/cart">
									Cart
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">
									About Us
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/contacts">
									Contacts
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default App;
