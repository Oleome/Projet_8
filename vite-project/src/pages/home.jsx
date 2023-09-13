import '../styles/home.scss';
import sable from '../assets/sable.jpg';
import ballon from '../assets/ballon.png';
import bateau from '../assets/bateau.png';
    

function Home() {
    return (

        <main>
            <div className='img--sand'><img src={sable} alt="" /></div>
            <a href='#page-2' className='btn--slide'><img src={ballon} alt="ballon de plage" /></a>
            <div className='boat--container'>
                <img className='boat--pic' src={bateau} alt="bateau" />
            </div>
            <section>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iure illo accusantium quibusdam error iusto. Alias ad commodi suscipit, iure ipsa totam rem, porro at labore beatae ullam voluptatibus corrupti?
                    Placeat dolores et quaerat blanditiis consequatur commodi aliquid, adipisci qui, illum vero facere voluptatum magni sint! Accusamus quod rerum consectetur, eum, alias quibusdam quasi nesciunt dolor corporis, veniam vero voluptate.
                    Totam quae error maxime, amet quasi enim voluptas alias excepturi asperiores at. Tempore necessitatibus quod ex, magnam earum omnis. Consectetur quam sequi sed nulla voluptates molestiae voluptatem mollitia repellendus corporis?
                    Quae, expedita maxime! Accusamus, atque? Reiciendis modi corporis libero excepturi beatae animi iure maiores perspiciatis quidem possimus atque qui pariatur aliquam deserunt consequuntur, dignissimos labore eum! Tenetur quae nostrum unde.
                    Autem veritatis obcaecati sapiente ex laboriosam eum odit quis qui. Odio vitae, recusandae eos doloribus, facilis cumque praesentium sequi est quis incidunt eum vero possimus a et, iusto dolorem. Molestias!
                    Sapiente ad aliquam repudiandae, alias delectus accusantium laudantium corporis eaque beatae! Nobis nisi omnis repudiandae iusto quas ea possimus tempore dolores! Doloremque autem deleniti, quo suscipit fugiat explicabo nobis provident?
                    Soluta hic voluptas mollitia cum natus dolorem ipsum fugit numquam architecto voluptatem, sequi eos velit voluptatibus quidem error doloremque aliquam accusantium veritatis. Tempora libero maiores, nisi minus repellat qui minima.
                </p>
            </section>
            <div className='img--sand page-2'><img id='page-2' src={sable} alt="" /></div>
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


