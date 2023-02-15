function VideoBoxContainer(VideoBoxDataList) {
    let vnode = null;

    function initVnode() {
        vnode = h(
                "div", 
                {
                    className: "video-box-container",
                },
                VideoBoxDataList.map(item => {
                    return new VideoBox(item).getVnode();
                }),
        )
    }

    function getVnode() {
        return vnode;
    }

    function constructor() {
        initVnode();
        this.getVnode = getVnode;
    }

    constructor.call(this);
}