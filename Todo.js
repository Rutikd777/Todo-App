let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ol = document.querySelector('ol');

btn.addEventListener("click",function(){
    
    let lis = document.createElement('li');
    lis.innerText = inp.value;

    let delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete');
    

    // delbtn.addEventListener("click",function(){
    //     lis.innerText = "";
    // })

    ol.appendChild(lis);
    lis.appendChild(delbtn);
    inp.value = "";
    
    
    // let delbtns = document.querySelectorAll(".delete");
    // for(delbtn of delbtns){                         //This function works on the pre-existing element noy on newly added
    //     delbtn.addEventListener("click",function(){    // but  this works inside functions function not outside this function 
    //         let par = this.parentElement;
    //         // console.log(par);
    //         par.remove();
    //     })
    // }
})


//Event Delegation

ol.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

