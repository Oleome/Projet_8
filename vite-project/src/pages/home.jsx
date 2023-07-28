import Wave from 'react-wavify';
import '../styles/home.scss';

function Home() {
    return (
        <main>
            <div className="wave-dark">
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
            </div>
            <div className="sable"></div>
        </main>
    )
}

export default Home


