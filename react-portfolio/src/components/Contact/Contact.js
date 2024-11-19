import './Contact.css';

const Contact = () => {

    return (
        <>
            <div className="contact">
                <section id="contact" class="homeDiv ">
                    <div class="fixed-bg">
                        <div class="about-homeText1">
                            <div class="about-intro">
                                <h1 class="title-text">Let's Connect</h1>
                                <hr />
                            </div>
                            <div class="contact-details">
                                <div class="left-contact-container">
                                    <img src="./images/contact.jpg" />
                                    Image by <a href="https://www.freepik.com/free-photo/hand-holding-telephone-with-orange-background_33626677.htm#query=contact&position=13&from_view=search&track=sph">Freepik</a>
                                </div>
                                <div class="right-contact-container">
                                    <h3>Drop me a message !! </h3>
                                    <div class="mail-svg">
                                        <img src="./images/mail2.svg" />
                                    </div>
                                    <div class="container py-4">

                                        <form id="contactForm">
                                            <div class="mb-3">
                                                <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
                                            </div>
                                        
                                            <div class="mb-3">
                                                <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
                                            </div>
                                        
                                            <div class="mb-3">
                                                <textarea class="form-control" id="subject" type="text" placeholder="Subject" style={{height: '2rem'}} data-sb-validations="required"></textarea>
                                            </div>

                                            <div class="mb-3">
                                                <textarea class="form-control" id="message" type="text" placeholder="Message" style={{height: '10rem'}} data-sb-validations="required"></textarea>
                                            </div>
                                        
                                            <div class="d-grid">
                                                <button class="btn btn-primary btn-lg submitButton" type="submit">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>   
        </>  
    );
};

export default Contact;