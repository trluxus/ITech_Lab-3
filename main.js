function SwapImg(cur, tgt)
{
    var TmpImg = new Image();
    TmpImg.src=document.images[tgt-1].src;
    document.images[tgt-1].src=document.images[cur-1].src;
    document.images[cur-1].src=TmpImg.src;
}

function ResizeImg(cur,h,w)
{
    var UserHeight = document.getElementById(h).value;
    var UserWidth = document.getElementById(w).value;

    document.images[cur-1].height=UserHeight;
    document.images[cur-1].width=UserWidth;

    document.getElementById(h).value=undefined;
    document.getElementById(w).value=undefined;
}