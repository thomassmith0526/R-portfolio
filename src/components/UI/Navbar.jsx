export default function Nav({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-5 lg-6">
                        {links.map((link) => link)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}