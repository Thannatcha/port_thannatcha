import React, { Component } from 'react';
//import Social from '../components/Social';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = this.state;
        
        try {
            const response = await fetch('https://your-server.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                alert('Message sent successfully!');
                this.setState({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    };

    render() {
        return (
            <div className="condiv right-icons">
                <h1 className="subtopic">Contact Us</h1>
                <form onSubmit={this.handleSubmit} className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        className="border p-2 rounded"
                        required
                    /><br/>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        className="border p-2 rounded"
                        required
                    /><br/>
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={this.state.message} 
                        onChange={this.handleChange} 
                        className="border p-2 rounded"
                        required
                    ></textarea><br/>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
                </form>
                
            </div>
        );
    }
}

export default Contact;
