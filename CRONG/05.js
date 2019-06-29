var news = [
  {
    "title": "sbs",
    "imgUrl": "https://static.naver.net/newsstand/2017/0313/article_img.jpg",
    "newslist": [
      "가나다라마",
      "바사아자차",
      "카타파하"
    ]
  },
  {
    "title": "mbc",
    "imgUrl": "https://static.daum.net/newsstand/2017/0313/article_img.jpg",
    "newslist": [
      "ABCDE",
      "FGHIJK",
      "LMNOP",
      "QWXYZ"
    ]
  }
]
// let [, mbc] = news;
// let { title, imgUrl } = mbc;
let [, { title, imgUrl }] = news;
console.log(title)  // mbc
console.log(imgUrl) // https://static.daum.net/newsstand/2017/0313/article_img.jpg
