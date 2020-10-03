import React from 'react';
import '../Auth.css';
import './UnknowPassword.css';
import { ToastContainer } from 'react-toastify';

const customNotification = require('../../utils/notification');

class ForgotPass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: '' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			email: event.target.value,
		});
	}

	ResetPass(e) {
		e.preventDefault();
		if (this.validateFormData()) console.log('send email to server');
	}

	validateFormData() {
		let validateEmail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
		if (!validateEmail.test(this.state.email)) {
			customNotification.fireNotification('warning', 'Email not valid');
			return false;
		}
		return true;
	}

	render() {
		//retireive the data
		// Validate
		// Send to the server POST API
		// FIre a nof=tif iwth reponse

		return (
			<React.Fragment>
				<ToastContainer />
				<div className='container_pwd'>
					<div className='unknow_page'>
						<h3>Type your email to receive a resetlink for your Password</h3>
						<form onSubmit={(e) => this.ResetPass(e)}>
							<input
								type='text'
								onChange={this.handleChange}
								placeholder='email'
							/>

							<button type='submit'>Send</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ForgotPass;
