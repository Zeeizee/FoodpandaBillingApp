const btnsub=document.querySelectorAll('.btn-sub')
const btnplus=document.querySelectorAll('.btn-add')
const btnnmb=document.querySelectorAll('.btn-num')
const btnprice=document.querySelectorAll('.btn-price')
const totalPrice=document.querySelectorAll('.total-bill')
const netbill=document.querySelector('.net-bill')
const discbutton=document.querySelector('.discbutton')
const cancelbutton=document.querySelector('.cancel')
const discbox=document.querySelector('.offers')
const dislist=document.querySelectorAll('ul li')
const disamount=document.querySelector('.dis-amount')
const netpayable=document.querySelector('.net-payable')




dislist.forEach(list=>{
    list.addEventListener('click',(e)=>
    {
      
         if(e.target.tagName==="LABEL"){
            console.log(e.target.getAttribute('id'))
            disamount.innerText=e.target.getAttribute('id')
            let discountamount=parseInt(e.target.getAttribute('id'))
            let netbillamount=parseInt(netbill.innerText)
            netpayable.innerText=(netbillamount-(discountamount/100)*netbillamount).toString();            
            discbox.classList.add('d-none')
            netpayable.innerText


    }
    })
})


cancelbutton.addEventListener('click',()=>{
    discbox.classList.add('d-none');
})

discbutton.addEventListener('click',()=>{
discbox.classList.remove('d-none')
})
btnsub.forEach(btn=>{
    btn.addEventListener('click' ,(e)=>{
        e.preventDefault()
        const pe=e.target.parentElement;
        const btnvalue=e.target.parentElement.querySelector('.btn-num')      
        const btnprice=e.target.parentElement.querySelector('.btn-price span')
        let numberOfItems=parseInt(btnvalue.innerText)
        if(numberOfItems>1){
        numberOfItems=numberOfItems-1;
       let price=numberOfItems*parseInt(btnprice.innerText)     
        btnvalue.innerText=numberOfItems.toString();
       const totalvalue=pe.parentElement.querySelector('.bill');
       totalvalue.innerText=price
        
calculateBill();
    }

    
    
    })

})
btnplus.forEach(btn=>{



    btn.addEventListener('click' ,(e)=>{
        e.preventDefault()
        const pe=e.target.parentElement;
        const btnvalue=e.target.parentElement.querySelector('.btn-num')
        const btnprice=e.target.parentElement.querySelector('.btn-price span')
        let numberOfItems=parseInt(btnvalue.innerText)
        numberOfItems=numberOfItems+1;
       let price=numberOfItems*parseInt(btnprice.innerText)     
        btnvalue.innerText=numberOfItems.toString();
       const totalvalue=pe.parentElement.querySelector('.bill');
       totalvalue.innerText= price  

calculateBill()
    
    })

})

const calculateBill=()=>{
    let totalbill=0
    const totalPrice=document.querySelectorAll('.total-bill')
    totalPrice.forEach(v=>{

        console.log(v)
        let totalvalue=parseInt(v.innerText)



        totalbill=totalvalue+totalbill;
        netbill.innerText=totalbill;
let discountamount=parseInt(disamount.innerText);

if(discountamount>0){

        let netbillamount=parseInt(netbill.innerText)
            netpayable.innerText=(netbillamount-(discountamount/100)*netbillamount).toString();            
            netpayable.innerText
}else{
    netpayable.innerText=netbill.innerText
}
    })
}
calculateBill()






