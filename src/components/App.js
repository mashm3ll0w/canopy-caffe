import React from "react";

function App() {
	return (
		<div>
			<div id="site-navbar">
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
			<div id="header">
				<h1 className="hero-heading">DRINKS TO JACK YOUR MIND</h1>
				<p className="tagline">Darkest Berries. Sweetest...</p>
				<p className="tag-inventory">We stock the sickest (no pun intended) inventory of Coffee, Tea, Juices, Milkshakes, Pastries and more. <br/> Whatever it takes to get you moving.</p>
				<div className="home-buttons">
					<button className="btn btn-custom" type="button" name="menu-button">
						EXPLORE
					</button>
					<button className="btn btn-custom" type="button" name="menu-button">
						LEARN MORE
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
