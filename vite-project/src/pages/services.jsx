import icone from '../assets/icone.png';
import '../styles/services.scss';

function Services () {
    return (
        <main className='services--container'>
            <div className="card">
                <div className='icone'>
                    <img src={icone} alt="icone d'ordinateur" />
                </div>
                <div className='skills'>
                    <h2>Développement web</h2>
                    <p></p>
                </div>
                <div className='languages'>
                    <h2>Languages utilisés</h2>
                    <p></p>
                </div>
            </div>
        </main>
    )
}

export default Services