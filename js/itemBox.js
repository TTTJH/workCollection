function ItemBox(data) {
    let vnode = null;

    function initVnode() {
        vnode = h(
                "div", 
                {
                    className: "item-box",
                },
                h(
                    "div",
                    {
                        className: "item item-" + data.direction
                    },
                    [
                        h(
                            "div",
                            {
                                className: "item-banner",
                            },
                            h(
                                "img",
                                {
                                    className: "item-banner-img",
                                    src: data.imgUrl
                                }
                            )
                        ),
                        h(
                            "div",
                            {
                                className: "item-content item-content-" + data.direction
                            },
                            [
                            h(
                                "p",
                                {
                                    className: "item-content-title item-content-title-"+data.direction
                                },
                                data.title
                            ),
                            h(
                                    "div",
                                    {
                                        className: "item-btn1",
                                        onClick: function(){
                                                imgContainer.show(data.imgUrlList);                                            
                                        }
                                    },
                                    h(
                                        "img",
                                        {
                                            src:"./img/check.png"
                                        }
                                    )
                                ),
                                // h(
                                //     "p",
                                //     {
                                //         className: "item-content-title",
                                //     },
                                //     data.title
                                // ),
                                // h(
                                //     "p",
                                //     {
                                //         className: "item-content",
                                //     },
                                //     data.content
                                // ),
                                // h(
                                //     "div",
                                //     {
                                //         className: "item-download-btn",
                                //     },
                                //     "↓"
                                // )

                            ]
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