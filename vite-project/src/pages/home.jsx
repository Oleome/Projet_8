import '../styles/home.scss';
import sable from '../assets/sable.jpg';
import ballon from '../assets/ballon.png';
import bateau from '../assets/bateau.png';
import nina from '../assets/ninacarducci.png';
    

function Home() {
    return (

        <main>
            <div className="text-container">
                <div className="animated-text">
                    Mon texte qui apparaît depuis la gauche.
                </div>
            </div>
            {/* <div className='test'>
                <h2>Mes projets</h2>
                <a href='#page-2' className='btn--slide'><img src={ballon} alt="ballon de plage" /></a>
            </div>
            {/* <section className='page-2' id='page-2'>
                <div className='card'>
                    <img src={nina} alt="" />
                </div>
            </section> */} 
        </main>
    )
}

export default Home




{/* <div className="wave-dark">
                <Wave className="wave-dark__animation" fill='#0080ff'
                    paused={false}
                    options={{
                    height: 20,
                    amplitude: 40,
                    speed: 0.15,
                    points: 3
                    }}
                />
            </div>
            <div className="wave-bright">
                <Wave className="wave-bright__animation" fill='#0080ff'
                    paused={false}
                    options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                    }}
                />
            </div> */}


