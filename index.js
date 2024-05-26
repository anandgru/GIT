const h=document.createElement('h3');
h.textContent='Buy high quality organic fruits online';
h.style.fontStyle = "italic";
//const htt=document.createTextNode('Buy high quality organic fruits online');
//htt.style.fontStyle='italic';
//h.appendChild(htt);
const divs=document.getElementsByTagName('div')
divs[0].appendChild(h);
const para=document.createElement('p');
const ptt=document.createTextNode('Total Fruits: 4');
para.appendChild(ptt);
para.id='fruits-total';
const ibf=document.querySelector('.fruits');
divs[1].insertBefore(para,ibf);

/*const h=document.querySelector('#main-heading');
h.style.textAlign='right';
const h1=document.querySelector('#basket-heading');
h1.style.color='brown';
const h2=document.querySelector('.fruits');
h2.style.backgroundColor='gray';
h2.style.margin='30px'
h2.style.padding='30px'
h2.style.width='50%'
h2.style.borderRadius='5px'
h2.style.listStyleType='none';
const h3=document.querySelector('h2');
h3.style.marginLeft='30px'
const h4=document.querySelectorAll('.fruit');
for(let i=0;i<h4.length;i++){
    h4[i].style.backgroundColor='white';
    h4[i].style.padding='10px';
    h4[i].style.margin='10px';
    h4[i].style.borderRadius='5px';
}
const h5=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<h5.length;i++){
    h5[i].style.backgroundColor='red';
    h5[i].style.color='white';
}*/