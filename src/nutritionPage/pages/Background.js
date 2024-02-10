import React from 'react'
import "../Foods.css"
import "../Foodres.css"
import bg3 from "../foodsPhoto/bg3.jpg"

const Background = () => {
	return (
		<div >
			<div className="card bg-light text-black">
				<img src={bg3} className="card-img " style={{ opacity: "0.86" }} alt="bg " />
				<div className="card-img-overlay d-flex align-items-center">
					<div className="container d-flex flex-column align-items-center">
						<p className='my-2 fs-1 fw-bold'>
							Popeye was right about <span className='fst-italic' >spinach</span>
						</p>
						<p className='my-1 fs-2  fw-bolder'>dark green, leafy vegetables are the healthiest </p>
						<p className='my-1 fs-3 fst-italic fw-bolder'>food on the planet. ...</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Background