import '../index.css';

const LandingSection = () => {
    return (
        <section className='h-screen bg-background font-mh-light'>
            <div className='border-[#6F6B57] border-2 w-96 h-96 rounded-[150rem] absolute -z-50'></div>
            <div className='border-[#6F6B57] border-2 w-96 h-96 rounded-[150rem] absolute -z-50'></div>
            <div className='border-[#6F6B57] border-2 w-96 h-96 rounded-[150rem] absolute -z-50'></div>

            <div className='font-logo text-4xl flex flex-col justify-center items-center h-56 mr-16'>
                <h1>Soulager vos douleurs et</h1>
                <h1 className='ml-52 mt-4'>retrouvez votre confort</h1>
            </div>
            <div className='w-[35rem] pr-16 mb-16'>
                <p>
                    Grâce au massage holistique, 
                    retrouver un équilibre entre vos muscles, 
                    vos sens, vos émotions et votre mental pour plein de bénéfices !
                </p>
            </div>
            <div className='bg-[#CBC9BD] w-auto h-28 flex 
                justify-center items-center hover:bg-[#edeadc]'
            >
                <a className='font-logo text-2xl' href='#'>Je prends rendez-vous</a>
            </div>
            <div className='bg-[#88846D] w-auto h-28 flex 
                justify-center items-center hover:bg-[#98947a]'
            >
                <a className='font-logo text-2xl' href='#'>Les tarifs</a>
            </div>
        </section>
    );
}

export default LandingSection;