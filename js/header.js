function Header() {
    let vnode = null;

    function initVnode() {
        vnode = h(
            "div",
            {
                className: "header",
            },
            [

                h(
                        "img",
                        {
                            className: "logo header-item",
                            src: "./img/logo.png"
                        },
                        ""
                ),
                h(
                    "div",
                    {
                        className: "header-item"
                    },
                    "作品小站"
                ),
                // h(
                //     "div",
                //     {
                //         className: "header-item"
                //     },
                //     "Item2"
                // ),
                // h(
                //     "div",
                //     {
                //         className: "header-item"
                //     },
                //     "Item3"
                // ),
            ]
        );
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