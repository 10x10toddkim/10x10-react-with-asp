import { render, Component, h } from 'https://unpkg.com/preact@latest?module';
import { useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm?module';

// Initialize htm with Preact
const html = htm.bind(h);

const CategoryList = (props) => {
    const getList = (items) => {
        const li = [];
        for (let i = 0; i < items.length; i++) {
            const thumbnail = h('img', {
                src: items[i].imageUrl,
                alt: '',
            });
            const title = h('div', {}, items[i].text);
            li.push(h('li', { class: 'category-item' }, [thumbnail, title]));
        }

        return h('ul', { class: 'category-list' }, li);
    };

    return html`<div>${getList(props.list)}</div>`;
}

const categoryList = [
    {
        key: 1,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_stationary.jpg',
        text: '디자인문구',

    },
    {
        key: 2,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_digital_v2.jpg',
        text: '디지털/핸드폰',
    },
    {
        key: 3,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_designelectronic.jpg',
        text: '디자인가전',
    },
    {
        key: 4,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_furniturestorage_v2.jpg',
        text: '가구/수납',
    },
    {
        key: 5,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_decolights_v2.jpg',
        text: '데코/조명',
    },
    {
        key: 6,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_fabricliving_v2.jpg',
        text: '패브릭/생활',
    },
    {
        key: 7,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_kitchen_v2.jpg',
        text: '키친',
    },
    {
        key: 8,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_food_v2.jpg',
        text: '푸드',
    },
    {
        key: 9,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_fashion.jpg',
        text: '패션의류',
    },
    {
        key: 10,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_acc.jpg',
        text: '패션잡화',
    },
    {
        key: 11,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_jewelrywatch_v2.jpg',
        text: '주얼리/시계',
    },
    {
        key: 12,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2020/category/img_cate_beauty_v2.jpg',
        text: '뷰티',
    },
    {
        key: 13,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_toy.jpg',
        text: '토이/취미',
    },
    {
        key: 14,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2021/category/img_cate_catndog.jpg',
        text: '캣앤독',
    },
    {
        key: 15,
        imageUrl: 'https://fiximage.10x10.co.kr/m/2018/category/img_category_camping.jpg',
        text: '캠핑',
    },
];

render(html`<${CategoryList} list=${categoryList} name="World" />`, document.getElementById("page-category-section-category-list"));
