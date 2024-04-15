const THICKNESS = 60;
const TOPWIDTH = 100;
const INDENT = 10;
const GAP = 4;
function layer(n,i)
{
    let x = i * INDENT;
    let y = (n-i-1) * THICKNESS;
    let width = 2*(n-i-1)*INDENT + TOPWIDTH;
    let height =THICKNESS;
    let ele = document.createElement("div");
    ele.className = "layer";
    ele.style.left = x +'px';
    ele.style.top = y + 'px';
    ele.style.width = width + 'px';
    ele.style.height = (height-GAP) + 'px';
    ele.id = "layer" + i;
    ele.innerHTML = "piece" + i;
    ele.style.backgroundColor = 'rgb(' + i*30 + ','
            + (255-i*30) + ',' + (255-i*30) + ')';
    document.body.appendChild(ele);
}

function tower(n)
{
    for (let i = 0; i<n;i++)
        layer(n,i);
}

function move(i,x,y)
{
    let ele = document.getElementById("layer"+i);
    ele.style.left = x + 'px';
    ele.style.top = y+ 'px';
}

tower(7);