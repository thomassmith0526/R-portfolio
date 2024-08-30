export default function Contact() {

    return (
        <div className='info pt-4'>
            <ui>
                <li className="full">
                    <label for="name">Full Name</label>
                    <input type="text" id="name"></input>
                </li>
                <li>
                    <label for="email">Email Address</label>
                    <input type="text" id="email"></input>
                </li>
                <li>
                    <label for="message">Message</label>
                    <input type="text" id="message"></input>
                </li>
            </ui>

        </div>
    )
}