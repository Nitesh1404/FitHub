import React from 'react'
import "./Foods.css"
import bg3 from "./foodsPhoto/bg3.jpg"

const Foods = () => {
	return (
		<div className="container   my-3 d-flex food-body justify-content-around align-items-center" >
			<div className="container  d-flex flex-column h-50 justify-content-center">
				<h1 className='my-2'>
					Popeye was right about spinach:
				</h1>
				<h3 className='my-1'>dark green, leafy vegetables are the healthiest </h3>
				<h4 className='my-1'>food on the planet. ...</h4>
			</div>
			<div className="container ">
				<img src={bg3} className="rounded img-fluid" alt="" />

			</div>

		</div>
	)
}

export default Foods