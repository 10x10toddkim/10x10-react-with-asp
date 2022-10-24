const Information = (props) => {
    return (
        <>
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220805_115723_7570.jpg" alt="" />
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220805_120436_251.jpg" alt="" />
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220805_133513_6421.jpg" alt="" />
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220805_120512_8612.jpg" alt="" />
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220805_121849_5938.jpg" alt="" />
            <img src="http://webimage.10x10.co.kr/ckeditor/item/202208/20220808_114913_7773.jpg" alt="" />
        </>
    );
};

const targetElement = document.getElementById('page-product-section-information');
ReactDOM.render(<Information tag="information" value="information" />, targetElement);
