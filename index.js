const f=document.querySelector('form');
const fr=document.querySelector('.fruits');
const frt=document.querySelectorAll('.fruit');
for(let i=0;i<frt.length;i++){
    let btn=document.createElement('button');
    btn.innerHTML='<button class="edit-btn">Edit</button>';
    frt[i].appendChild(btn);
}
f.addEventListener('submit', function(event){
    event.preventDefault();
    const ftd=document.getElementById('fruit-to-add');
    const nli=document.createElement('li');
    nli.innerHTML=ftd.value + '<button class="delete-btn">x</button></br><button class="edit-btn"> Edit</button>';
    fr.appendChild(nli);
})
fr.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        fr.removeChild(event.target.parentElement);
    }
})