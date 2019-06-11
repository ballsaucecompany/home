import React, { Component } from 'react';
// import config from './formConfig'
import Form from './shippinginfo'
// import AddressForm from './AddressForm'
import ballsauces from '../IMG-4564.JPG'
import Pay from './paypal'


const Buy = () =>{
	return(
	
<div className='App-header'>

<div className='App'>
	<figure>
	<img src={ballsauces} alt='ballsauces'/>
	<figcaption>First Pitch(medium hot)   High and Tight(hot red chili honey habenero)  Chin Music(hot tomatillo anaheim habenero)</figcaption>
	</figure>
	<h1>Pay and Send Shipping Info:</h1>
	<Pay />
	<div style={{padding:50}}>
	<h3>Send Shipping Info Below:</h3>
	<Form />
		
	</div>
	<div>	
	{/* <p style={{float:'right'}}>We will contact you with tracking number.</p> */}
	</div>
</div>

</div>
	);
}

export default Buy;