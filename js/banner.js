function Banner() {
    let vnode = null;

    function initVnode() {
        vnode = h(
            "div",
            {
                className: "banner",
            },
            [
                h(
                    "p",
                    {
                        className: "banner-text banner-text1"
                    },
                    "Hello World"
                ),
                h(
                    "p",
                    {
                        className: "banner-text banner-text2"
                    },
                    "This is my world"
                ),
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