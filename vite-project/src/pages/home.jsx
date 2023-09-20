import '../styles/home.scss'; 
import me from '../assets/me.png';

function Home() {
    return (

        <main>
            <div className="typewriter">
                <p>Bonjour</p>
                <p>Je suis Pierre Pillot</p>
                <p>Dévellopeur web</p>
            </div>
            <div>
                <img src={me} alt="" />
            </div>
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


