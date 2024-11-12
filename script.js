let btn = document.querySelector('button')
let div = document.querySelector('div')



// 0  tosh
// 1 qogoz
// 2 qaychi

btn.addEventListener('click', ()=>{
    let inp = parseInt(document.querySelector('input').value); 
    
    
    
    
    
    let rob = Math.floor(Math.random() * 2); 

console.log(rob);

   
if(inp === 0 && rob === 1){
    div.innerHTML +=`
    <h1>siz yutqazdingiz</h1>
    `
}else if(inp === 0 && rob === 2){
    div.innerHTML +=`
    <h1>siz yuttingiz</h1>
    `
    
}else if(inp === 1 && rob === 0){
    div.innerHTML +=`
    <h1>siz yuttingiz</h1>
    `
}else if(inp === 1 && rob === 2){
    div.innerHTML +=`
    <h1>siz yutqizdingiz</h1>
    `
    // 0  tosh
// 1 qogoz
// 2 qaychi
}else if(inp === 2 && rob === 1){
    div.innerHTML +=`
    <h1>siz yuttdingiz</h1>
    `
}else if(inp === 2 && rob === 0){
    div.innerHTML +=`
    <h1>siz yutqizdingiz</h1>
    `
}else if(inp === rob){
    div.innerHTML +=`
    <h1>durrang</h1>
    `
}
})