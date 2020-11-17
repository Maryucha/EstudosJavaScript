function parimpar(n){
    if(n%2==0){
        return 'PAR!'
    }else{
        return 'Imapar!'
    }
 }
console.log(parimpar(2))

 function soma(n1=0,n2=0){
    return n1+n2
 }
 console.log(soma(2))
 let v=function(x){
     return x*2
 }
 console.log(v(5))

function fatorial(n) {
     let fat = 1
     for (let i = n; i > 1; i--) {
         fat *= i
     }
     return fat
}
console.log(fatorial(10))


//recurssividade


function fatorial(n){
   if(n==1){
       return 1
   } else{
       return n*fatorial(n-1)
   }
}
console.log(fatorial(5))