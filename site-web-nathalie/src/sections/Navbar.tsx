import '../index.css';

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center h-20 bg-background">
            <div className='text-xl'>
                <div className="font-logo">
                    <p>Nathalie</p>
                </div>
                <div className="font-logo ml-14">
                    <p>Stampfli</p>
                </div>
            </div>
            <div >
                <ul className='flex justify-evenly font-mh-light'>
                    <li className='p-6'><a href='#'>A Propos</a></li>
                    <li className='p-6'><a href='#'>Services</a></li>
                    <li className='p-6'><a href='#'>Tarifs</a></li>
                    <li className='p-6'><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}   

export default Navbar;