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
                                a.href = "http://43.153.205.199/files/%E5%8F%B2%E5%A9%89%E5%A9%B7%E4%BD%9C%E5%93%81%E9%9B%86.pdf";
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