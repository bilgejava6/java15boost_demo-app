import React from "react";

function Home() {
	return (
		<div className="contanier">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 border">
					<div className="mb-3">
						<input
							type="button"
							value="Login Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3">
						<input
							type="button"
							value="Porduct Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3">
						<input
							type="button"
							value="Avatar Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3">
						<input
							type="button"
							value="User Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3">
						<input
							type="button"
							value="Yarışma Page"
							className="btn btn-outline-success"
						/>
					</div>
					<div className="mb-3">
						<input
							type="button"
							value="User List Page"
							className="btn btn-outline-success"
						/>
					</div>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
}

export default Home;
