function VideoBox(data) {
    let vnode = null;

    function initVnode() {
        vnode = h(
                "div", 
                {
                    className: "video-box",
                },
                h(
                    "div",
                    {
                        className:"video",
                    },
                    [
                        // h(
                        //     "div",
                        //     {
                        //         className: "video-box-title"
                        //     },
                        //     "Hello World"
                        // ),
                        h(
                            "iframe",
                            {
                                className:"iframe",
                                src: data.src,
                                scrolling: "no",
                                border: "0",
                                frameborder: "no",
                                framespacing: "0",
                                allowfullscreen:"true"
                            },
                            ""
                        )
                    ]
                )
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
