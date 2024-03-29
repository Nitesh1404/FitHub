import React from 'react';
import Logo from '../assets/logo/Logo.png';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top mx-2" />
						FitHub
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">Foods</a>
							</li>

						</ul>
						
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navbar