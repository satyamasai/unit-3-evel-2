function orderFun(){

setTimeout(function(){
    
alert(" Your order is accepted ");
one()
two()
three()
four()


},0);
}



function four(){
    setTimeout(function(){
        alert("Order delivered")
        },12000)
}  
    
    


function three(){
    setTimeout(function(){
            alert("Your order is out for delivery ")
              },10000);
} 


function two(){
    setTimeout(function(){
        alert("Your order is being packed  ")
       },8000);
    
} 




function one(){
    setInterval(function(){
        alert("Your order is being prepared")
    },3000)
}
