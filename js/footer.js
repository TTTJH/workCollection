function Footer() {
    let vnode = null;

    function initVnode() {
        vnode = h(
            "div",
            {
                className: "footer"
            },
            [
                h(
                    "div",
                    {
                        className: "footer-text-container"
                    },
                    [
                        h(
                            "p",
                            {
                                className:"footer-copy"
                            },
                            "&copy; WanTing"
                        ),
                        h(
                            "p",
                            {
                                className:"footer-email",
                            },
                            "📧：1951409162@qq.com"
                        )
                    ]
                )
            ]
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