const submit = document.querySelector("form button");
const input = document.getElementById("input");
const ul = document.getElementsByTagName('ul')[0];

submit.addEventListener('click', function(){
    const listBaru = document.createElement('li');

    const txtbatal = document.createTextNode('Batal');
    const tBatal = document.createElement('button');
    tBatal.appendChild(txtbatal);

    const txtselesai = document.createTextNode('Selesai');
    const tSelesai = document.createElement('button');
    tSelesai.appendChild(txtselesai);

    const spasi = document.createTextNode('    ');
    
    const text = input.value;
    const teksList = document.createTextNode(text);
    listBaru.appendChild(teksList);
    listBaru.appendChild(spasi);
    listBaru.appendChild(tBatal);
    listBaru.appendChild(tSelesai);
    ul.appendChild(listBaru);

    edit = document.querySelectorAll('ul li button');
    list = document.querySelectorAll('.container ul li');


    for (let i = 0; i < edit.length; i++) {
        if (i%2==0) {
            edit[i].addEventListener('click', function(){
                list[i/2].style.opacity = '0';
                list[i/2].style.transition = '0.5s';
                setTimeout(function(){
                    ul.removeChild(list[i/2]);
                },500)
            });
        }
        else{
            edit[i].addEventListener('click', function(){
                list[i-((i+1)/2)].style.textDecoration = 'line-through';
            })
        }
    }
});