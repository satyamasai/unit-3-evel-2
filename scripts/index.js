// Add the coffee to local storage with key "coffee"

async function myFun(){

let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
let res= await fetch(url)

let data = await res.json();
//console.log(data.menu.data)
append(data)

}
myFun()

function append(data){
    var coffeearr= data.menu.data;
    //console.log(coffeearr)
var container=document.getElementById("menu")
    coffeearr.forEach(function(ele){

        var div= document.createElement("div")
        var image= document.createElement("img")
        image.src=ele.image
        var type= document.createElement("p")
        type.innerText=ele.title
        var price= document.createElement("p")
        price.innerText=ele.price

        var addbucket= document.createElement("button");
        addbucket.setAttribute("id","add_to_bucket")
        addbucket.innerText="Add to bucket"
        addbucket.addEventListener("click",function(){
            local(ele)
        })
        div.append(image,type,price,addbucket)
        container.append(div)
     

    })
}
var count= localStorage.getItem("count") 
let count_div=document.getElementById("coffee_count")
count_div.innerText=count  
function local(element){
    count++
    localStorage.setItem("count",count)
    console.log(element);
var coffee= JSON.parse(localStorage.getItem("coffee")) || []
let count_div=document.getElementById("coffee_count")
count_div.innerText=count    
    coffee.push(element)
    
    
    localStorage.setItem("coffee", JSON.stringify(coffee))

}