

let countEl=document.getElementById("counter")

let count=0
function increment(){
    count+=1
    countEl.innerText=count

}
let saveEl=document.getElementById("save-el")
function save()
{
    saveEl.innerText=saveEl.innerText+count+"-"
    countEl.innerText=0
    count=0
}
function reset()
{
    saveEl.innerText="Previous entries:"
    countEl.innerText=0
    count=0
}
