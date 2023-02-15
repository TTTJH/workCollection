const itemBoxDataList = [
    {
        imgUrl: "./img/work1-1.jpg",
        title: "主题花境景观设计",
        direction: "column",
        imgUrlList:[
            "./img/work1-1.jpg",
            "./img/work1-2.jpg",
        ]
        // content: "Hello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm content",
    },
    {
        imgUrl: "./img/work2.jpg",
        title: "深圳小梅沙滨海公园景观设计",
        direction: "column",
        imgUrlList:[
            "./img/work2.jpg"
        ]
        // content: "Hello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm content",
    },
    {   
        imgUrl: "./img/work3-1.jpg",
        title: "再生式垂直公园景观设计",
        direction: "row",
        imgUrlList:[
            "./img/work3-1.jpg",
            "./img/work3-2.jpg",
            "./img/work3-3.jpg",
        ]
        // content: "Hello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm contentHello I'm content",
    },
];

const videoBoxDataList = [
    {
        src:"http://player.bilibili.com/player.html?aid=215119229&bvid=BV19a411s7oS&cid=749747598&page=1",
    },
    {
        src:"http://player.bilibili.com/player.html?aid=768699654&bvid=BV1or4y1b7Ha&cid=588589295&page=1",
    },
];

let header = new Header();
let banner = new Banner();
let imgContainer = new ImgContainer();
let itemBoxContainer = new ItemBoxContainer(itemBoxDataList);
let videoBoxContainer = new VideoBoxContainer(videoBoxDataList);
let footer = new Footer();

const APP = h(
    "div",
    {
        class: "app"
    },
    [
        header.getVnode(),
        // banner.getVnode(),
        itemBoxContainer.getVnode(),
        videoBoxContainer.getVnode(),
        footer.getVnode(),
        imgContainer.getVnode(),
    ]
);