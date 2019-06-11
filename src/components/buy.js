import React, { Component } from 'react';
// import config from './formConfig'
import Form from './shippinginfo'
// import AddressForm from './AddressForm'
import ballsauces from '../IMG-4564.JPG'


const Buy = () =>{
	return(
	
<div className='App-header'>
	
<div className='App'>
	<img src={ballsauces} alt='ballsauces'/>
	<div style={{padding:50}}>
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