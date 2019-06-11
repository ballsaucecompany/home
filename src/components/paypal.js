import React, { Component } from 'react';

class Pay extends Component {
	render() { 
		return (
<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
		<input type="hidden" name="cmd" value="_s-xclick"/>
		<table>
		<tr><td><input type="hidden" name="on0" value="Sauces"/>Pay via Paypal (Do not need account)</td></tr><tr><td><select name="os0">
			<option value="High and Tight (red chili hot)">High and Tight (red chili hot) $6.00 USD</option>
			<option value="Chin Music (green tomatillo hot)">Chin Music (green tomatillo hot) $6.00 USD</option>
			<option value="First Pitch (red medium)">First Pitch (red medium) $6.00 USD</option>
		</select> </td></tr>
		</table>
		<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
		<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
		{/* <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/> */}
	</form>
		);
	}
}
export default Pay;