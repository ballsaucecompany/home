import React, { Component } from 'react';
import AddressForm from './AddressForm'

const Buy = () =>{
	return(
<div className='App-header'>
	<AddressForm />
	<p>Please allow one week to ship</p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<table>
<tr><td><input type="hidden" name="on0" value="Sauces"/>Sauces</td></tr><tr><td><select name="os0">
	<option value="High and Tight(Green Habenaro)">High and Tight (Tomatillo/Anaheim/Habenero) $8.00 USD</option>
	<option value="Cherry Habenero">Cherry Habenero $8.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
<p>Any questions about ordering or pricing contact <a href='mailto:info@ballsaucecompany.com'>info@ballsaucecompany.com</a></p>
</div>
	);
}

export default Buy;