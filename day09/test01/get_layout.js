function get_layout(ele){
    const layout={
        width:ele.offsetWidth,
        height:ele.offsetHeight,
        left:ele.offsetLeft,
        top:ele.offsetTop
    }
    if(ele.offsetParent){
        const parentLayout=get_layout(ele.offsetParent);
        layout.left+=parentLayout.left;
        layout.top+=parentLayout.top;
    }
    return layout;
}