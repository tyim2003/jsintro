function makeBarchartLine(n) {
    let out=""
    for(let i=0;i<n;i++)
        out+="x"
    return out
}
let outtext = ""

let y = 100


for (let x = 0; x < y * y; x++) {

    outtext = outtext + makeBarchartLine(10*Math.sin(x)) + "<br />"
}

document.getElementById("out").innerHTML = outtext