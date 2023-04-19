const express = require('express');
//стандартнй код
const router = express.Router();
// /main обєднання


router.get('/', (req, res) => {
const imgHeaderFirst = 'img/green.jpg';
const navTextA = "офіс, школа,книги";
const navTextB = "Друкована продукція";
const navTextC = "Друкована продукція Medisport";
const name = "Плакат 'М'язи обличчя' Медіспорт укр.мова";
const imgStar = 'img/star.png';
const nambResponse = "1";
const response = "відгук";
const nambResponse2 = "2";
const responses = "відгуки";
const codNumber = " 362687325";
const mainItemImg = 'img/main_item.jpg';
const topSales = "Топ продажів";
const price = "150";
const priceIcon = "₴";
const priceText= "Є в наявності";
const priceImgA = 'img/icon-compare.jpg';
const priceImgB = 'img/yellow-empty-heart.svg';
const amount = "36";
const seller = "Реабілітація та спорт";
const sellerRating = "4.9";
const sellerRatingVoice = "(87 оцінок)";
const city = "Київ";
const imgXs = 'img/main_item_xs.jpg';
const imgYellowHeart = 'img/yellow-heart.png';
const titleA = 'img/titleA.jpg';
const titleB = 'img/titleB.jpg';
const titleC = 'img/titleC.jpg';
const titleD = 'img/titleD.jpg';
const titleE = 'img/titleE.jpg';
const titleF = 'img/titleF.jpg';
const textTitleA = "Плакат 'М'язи шиї' Медіспорт";
const textTitleB = "Плакат 'Фізіотерапія-тригерні точки'";
const textTitleC = "Плакат 'М'язова система людини' (1)";
const textTitleD = "Плакат 'Хребет людини' Медіспорт";
const textTitleE = "Комплект плакатів 'М'язи людини'";
const textTitleF = "Плакат 'М'язова система людини'";

    res.render('page', {
        imgHeaderFirst: imgHeaderFirst,
        navTextA: navTextA, 
        navTextB: navTextB, 
        navTextC: navTextC,
        name:name,
        imgStar: imgStar,
        nambResponse: nambResponse,
        response: response,
        codNumber: codNumber,
        mainItemImg: mainItemImg,
        topSales: topSales,
        price: price,
        priceIcon: priceIcon,
        priceText: priceText,
        priceImgA: priceImgA,
        priceImgB: priceImgB,
        amount: amount,
        seller: seller,
        sellerRating: sellerRating,
        sellerRatingVoice: sellerRatingVoice,
        city: city,
        imgXs: imgXs,
        imgYellowHeart: imgYellowHeart,
        titleA: titleA,
        titleB: titleB,
        titleC: titleC,
        titleD: titleD,
        titleE: titleE,
        titleF: titleF,
        textTitleA: textTitleA,
        textTitleB: textTitleB,
        textTitleC: textTitleC,
        textTitleD: textTitleD,
        textTitleE: textTitleE,
        textTitleF: textTitleF,
        nambResponse2: nambResponse2,
        responses: responses,
    });

});



//стандартний код
module.exports = router;




/*
const studs = [
    { id: 1, name: 'Viktoria', gender: 'female', tags: ['hardworker']},
    { id: 2, name: 'Viktor', gender: 'male', tags: ['lazy']}
];

const arr = [
    'one',
    'two',
]
//виводим імя у верстці
router.get('/stud/:id', (req, res) => {
    const id = Number(req.params.id);
    const stud = studs.find((item) => item.id === id);

        console.log('stud', stud);
        //передаємо на сторінку наші дані імя і масиву
        res.render('page', {name: stud.name, arr});    
})
*/