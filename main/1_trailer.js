const mainTrailerStyles = {
    trailerImage: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        objectPosition: 'center',
    }
}

const Trailer = () => {
    React.useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            autoplay: true,
        });
    }, []);

    return (
        <>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102116501028588.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102116501828589.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102116502528590.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102116503228591.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102117514428592.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://imgstatic.10x10.co.kr/mobile/202210/2075/toprolling_MA_2022102114195328585.jpg"
                            alt=""
                            style={mainTrailerStyles.trailerImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const targetElement = document.getElementById('page-main-section-trailer');
ReactDOM.render(<Trailer />, targetElement);
