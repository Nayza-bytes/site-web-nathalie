import '../index.css';

const LandingSection = () => {
    return (
        <section className='h-screen bg-background'>
            <div className='font-logo text-4xl flex flex-col justify-center items-center h-56 mr-16'>
                <h1>Soulager vos douleurs et</h1>
                <h1 className='ml-52 mt-4'>retrouvez votre confort</h1>
            </div>
            <div>
                <p>
                    Grâce au massage holistique, 
                    retrouver un équilibre entre vos muscles, 
                    vos sens, vos émotions et votre mental pour plein de bénéfices !
                </p>
            </div>
            <div>
                <a>Je prends rendez-vous</a>
            </div>
            <div>
                <a>Les tarifs</a>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    );
}

export default LandingSection;