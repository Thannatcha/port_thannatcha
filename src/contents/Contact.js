import React, { Component, createRef } from 'react';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.formRef = createRef();
        this.buttonRef = createRef();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const btn = this.buttonRef.current;
        btn.innerText = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_8rqlyl5';
        const userID = 'your_emailjs_user_id'; // ต้องใส่ Public Key จาก EmailJS

        emailjs.sendForm(serviceID, templateID, this.formRef.current, userID)
            .then(() => {
                btn.innerText = 'Send Email';
                alert('Sent!');
                this.setState({ name: '', email: '', message: '' }); // เคลียร์ฟอร์มหลังจากส่งสำเร็จ
            })
            .catch((err) => {
                btn.innerText = 'Send Email';
                alert(JSON.stringify(err));
            });


    };

    render() {
        return (
            
            <div className="condiv right-icons">
                <form ref={this.formRef} onSubmit={this.handleSubmit} className="flex flex-col space-y-4">
                <h1 className="subtopic">Contact Us</h1>
                
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        className={`field`}
                        required
                    /><br/>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        className={`field`}
                        required
                    /><br/>
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={this.state.message} 
                        onChange={this.handleChange} 
                        className={`field`}
                        required
                    ></textarea><br/>
                    <button ref={this.buttonRef} type="submit" className={`input`}>
                        Send Email.
                    </button>
                </form>

            </div>
        );
    }
}

export default Contact;
