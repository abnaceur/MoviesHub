import React from 'react';
import '../Auth.css';

import './UnknowPassword.css';

class ForgotPass extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className='container_pwd'>
					<div className='unknow_page'>
						<h3>Enter your New Password</h3>
						<form action='#'>
							<input type='text' placeholder='Password' />
							<input type='text' placeholder='Repeat Password' />

							<button>Reset</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ForgotPass;
