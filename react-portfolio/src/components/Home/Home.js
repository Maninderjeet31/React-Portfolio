import './Home.css';

const Home = () => {

    return (
        <>
            <section id="home" class="homeDiv ">
				<div class="fixed-bg bg-1"></div>
				<div class="homeText">
					<div class="intro">
                        <h1 class="main-text">Maninderjeet Singh</h1>
						<p class="sub-text">I'm a developer !</p>
						<button type="button" onclick="window.location.href='#experience'">Experience</button> &nbsp; &nbsp;
						<button type="button">Let's Connect</button>
					</div>
				</div>
			</section>
        </>  
    );
};

export default Home;