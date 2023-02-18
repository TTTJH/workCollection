function ItemBoxContainer(itemBoxDataList) {
    let vnode = null;

    function initVnode() {
        vnode = h(
                "div", 
                {
                    className: "item-box-container",
                },
                [
                    ...itemBoxDataList.map(item => {
                        return new ItemBox(item).getVnode();
                    }),
                    h(
                        "div",
                        {
                            className: "workcollection-download-btn",
                            onClick: function(){
                                let a = document.createElement("a");
                                a.href = "./files/xxx.pdf";
                                a.download = "";
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                            }
                        },
                        "下载作品集👆"
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