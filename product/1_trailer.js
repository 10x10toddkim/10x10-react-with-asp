const productTrailerStyles = {
    imageContainer: {
        overflow: 'hidden',
        height: '100vw',
    },
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
            <div className="swiper" style={productTrailerStyles.imageContainer}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/basic600/462/B004628339-5.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/add1/462/A004628339_01-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/add2/462/A004628339_02-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/add3/462/A004628339_03-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/add4/462/A004628339_04-3.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src="http://thumbnail.10x10.co.kr/webimage/image/add5/462/A004628339_05.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
                            alt=""
                            style={productTrailerStyles.trailerImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const targetElement = document.getElementById('page-product-section-trailer');
ReactDOM.render(<Trailer />, targetElement);
