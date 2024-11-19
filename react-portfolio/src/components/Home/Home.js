import './Home.css';

const Home = () => {

    const style = {
        '--n': 7,    // Custom property n
        '--d': '1.5s' // Custom property d
      };

    return (
        <>
            <section id="home" class="homeDiv ">
				<div class="fixed-bg bg-1"></div>
				<div class="homeText">
					<div class="intro">
                        <h1 class="main-text">Maninderjeet Singh</h1>
						<p class="sub-text">
                            I am <span class="type" style={style}>
                            <span>
                                <span>a developer!</span>
                                <span>a designer!</span>
                                <span>a coder!</span>
                                <span>a problem solver!</span>
                                <span>a creative thinker!</span>
                                <span>a team player!</span>
                                <span>a quick learner!</span>
                            </span>
                            </span>
                        </p>
						<button type="button" onclick="window.location.href='#experience'">Experience</button> &nbsp; &nbsp;
						<button type="button">Let's Connect</button>
					</div>
				</div>
			</section>
        </>  
    );
};

export default Home;