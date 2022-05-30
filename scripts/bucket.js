// On clicking remove button the item should be removed from DOM as well as localstorage.
var order= JSON.parse(localStorage.getItem("coffee"))
let h3=document.getElementById("total_amount")
let total=0
order.forEach(function(ele,index){
     let bucket= document.getElementById("bucket")
     var div= document.createElement("div")
     var image= document.createElement("img")
     image.src=ele.image
     var type= document.createElement("p")
     type.innerText=ele.title
     var price= document.createElement("p")
     price.innerText=+ele.price
     total=total+(+price.innerText)
      let removebtn= document.createElement("button")
     removebtn.innerText="Remove"
     removebtn.setAttribute("id","remove_coffee")
     removebtn.addEventListener("click",function(){
         removeFun(index)
        
         
        
     })
     h3.innerText=total
     div.append(image,type,price,removebtn)
     bucket.append(div)
  
});

   var count=localStorage.getItem("count")
   
function removeFun(i){
     count--
     localStorage.setItem("count",count)
    order=order.filter(function(element,index){
        return index!=i;
    })
    localStorage.setItem("coffee",JSON.stringify(order))
    window.location.reload()

}

