

export default function Contact() {
    
    return (
        <div className='info pt-4'>
            <label for="name">Full Name</label>
            <input type="text" id="name"></input>
            <label for ="email">Email Address</label>
            <input type="text" id="email"></input>
            <label for="message">Message</label>
            <input type="text" id="message"></input>
        </div>
    )
}