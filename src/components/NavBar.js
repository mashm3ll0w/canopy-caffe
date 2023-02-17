import { NavLink } from "react-router-dom";


export default function NavBar({itemsInCart}) {
	return (
		<div id="site-navbar">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid nav-container">
					<p className="navbar-brand">
						Canopy.CAFFE
					</p>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/menu">
									Menu
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/cart">
                  Cart{itemsInCart ? <sup>{itemsInCart}</sup> : null}
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About Us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contacts">
									Contacts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
