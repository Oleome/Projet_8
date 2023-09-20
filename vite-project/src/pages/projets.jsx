import kasa from '../assets/Kasa.png';
import grimoire from '../assets/monvieuxgrimoire.png'
import '../styles/projet.scss';

function Projets () {
    return (
        <main className='main--projet'>
           <div className="card"><img src={kasa} alt="" /></div>
            <div className="card"><img src={grimoire} alt="" /></div>
            <div className="card"><img src="" alt="" /></div>
            <div className="card"><img src="" alt="" /></div>
            <div className="card"><img src="" alt="" /></div>
            <div className="card"><img src="" alt="" /></div>
            <div className="card"><img src="" alt="" /></div>
            <div className="card"><img src="" alt="" /></div>   
        </main>
    )
}

export default Projets