import Wave from 'react-wavify';
import "./header.scss";

function Header() {
    return (
        <header>

            <Wave className="wave" fill='#0080ff'
                paused={false}
                options={{
                height: 20,
                amplitude: 40,
                speed: 0.15,
                points: 3
                }}
            />

        </header>
    )
}

export default Header