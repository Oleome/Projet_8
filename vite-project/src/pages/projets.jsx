import kasa from '../assets/Kasa.png';
import nina from '../assets/nina.png';
import grimoire from '../assets/monvieuxgrimoire.png';
import '../styles/projet.scss';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import light from '../assets/light.png';

function Projets () {
    return (
        <main className='main--projet'>
            <div className="card">
                <img className='card--img' src={kasa} alt="" />
                <div className='pastille'>
                    <img className='pastille--tech' src={react} alt="" />
                </div>
            </div>
            <div className="card">
                <img className='card--img' src={grimoire} alt="" />
                <div className='pastille'>
                    <img className='pastille--tech' src={node} alt="" />
                </div>
            </div>
            <div className="card">
                <img className='card--img' src={nina} alt="" />
                <div className='pastille'>
                    <img className='pastille--tech' src={light} alt="" />
                </div>
            </div>
        </main>
    )
}

export default Projets