let cel=document.getElementById("count")
function increment(){
    let c=cel.innerText
    c++;
    cel.innerText=c
}
let prev_entry="Previous Counts are:"
function save()
{
    prev_entry+=cel.innerText+" - "
    cel.innerText=0
    document.getElementById("memory").innerText=prev_entry
}
