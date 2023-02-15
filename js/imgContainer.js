function ImgContainer() {
    let vnode = null;
    let currentIndex = 0;
    let dataList = [];
    function initVnode() {
        vnode = h(
            "div",
            {
                className: "img-container hidden",
                onClick: function(){
                    hide();
                }
            },
            [
                h(
                    "img",
                    {
                        className: "img-container-img",
                        // src: "./img/work1-1.jpg",
                        onClick: function(e){
                            e.stopPropagation();
                        }
                    },
                ),
                h(
                    "div",
                    {
                        className: "img-container-arrow img-container-left-arrow",
                        onClick: (e) => {
                            e.stopPropagation();
                            if([...e.target.classList].indexOf("arrow-disable") != -1){
                                return;
                            }
                            return changeCurrentIndex("sub")
                        }
                    },
                    "👈"
                ),
                h(
                    "div",
                    {
                        className: "img-container-arrow img-container-right-arrow",
                        onClick: (e) => {
                            e.stopPropagation();
                            console.log(e.target.classList);
                            if([...e.target.classList].indexOf("arrow-disable") != -1){
                                return;
                            }
                            return changeCurrentIndex("add");
                        }
                    },
                    "👉"
                ),
            ]
        );
    }

    function show(imgUrlList){
        document.querySelector(".img-container").classList.remove("hidden");
        document.querySelector(".img-container-img").src = "";
        document.querySelector(".img-container-img").src = imgUrlList[currentIndex];
        dataList = imgUrlList;
        updateArrowDisable();
    }

    function hide(){
        document.querySelector(".img-container").classList.add("hidden");
        currentIndex = 0;
    }

    function changeCurrentIndex(tag){
        if(tag == "add" && currentIndex < dataList.length - 1){
            document.querySelector(".img-container-img").src = "";
            document.querySelector(".img-container-img").src = dataList[++currentIndex];
        }else if(tag == "sub" && currentIndex != 0){
            document.querySelector(".img-container-img").src = "";
            document.querySelector(".img-container-img").src = dataList[--currentIndex];
        }

        updateArrowDisable();
    }

    function getVnode() {
        return vnode;
    }

    function updateArrowDisable(){
        if(currentIndex == dataList.length - 1){
            document.querySelector(".img-container-right-arrow").classList.add("arrow-disable");
        }else{
            document.querySelector(".img-container-right-arrow").classList.remove("arrow-disable");
        }

        if(currentIndex == 0){
            document.querySelector(".img-container-left-arrow").classList.add("arrow-disable");
        }else{
            document.querySelector(".img-container-left-arrow").classList.remove("arrow-disable");
        }
    }

    function constructor() {
        initVnode();
        this.getVnode = getVnode;
        this.show = show;
        this.hide = hide;
    }

    constructor.call(this);
}