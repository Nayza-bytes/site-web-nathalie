import '../index.css';

const Navbar = () => {
    return (
        <nav className="">
            <div className='text-xl'>
                <div className="">
                    <p>Nathalie</p>
                </div>
                <div className="">
                    <p>Stampfli</p>
                </div>
            </div>
            <div>
                <ul className="">
                    <li><a>A Propos</a></li>
                    <li><a>Services</a></li>
                    <li><a>Tarifs</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}   

export default Navbar;