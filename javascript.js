/* jshint esversion: 6 */
var urlBaseJSONPlaceholder = 'https://jsonplaceholder.typicode.com/';


window.addEventListener('load',function(){
    pageLoad();
});


const user = fetch(urlBaseJSONPlaceholder + 'users')
  .then(response => response.json())
  .then(json => json);

function pageLoad(){
    user.then(function(data){

        for(let i = 0; i< data.length; i++){
            const link =document.createElement('a'); 
            const link2 =document.createElement('a'); 
            const user = data[i];
            const id = user.id;
            const tbody = document.getElementById('tableBody');
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            
            link.href = 'userDetail.html';
            link.id = 'persona' + id;
            link.addEventListener('click', bottonePersona);
            link2.href = 'userDetail.html#listaPost';
            link2.id = 'postPersona' + id;
            link2.addEventListener('click', bottonePost);
            link.setAttribute("class","dettagli");

            td.innerHTML = user.name;
            td1.innerHTML = user.username;
            link.innerHTML = 'Dettagli';
            link2.innerHTML = 'Post';
            td2.appendChild(link);
            td3.appendChild(link2);
            
            tbody.appendChild(tr);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
        }

        function bottonePersona(e){
            var idPersona = e.target.id;
            localStorage.idPersona = idPersona.substring(7, idPersona.length);
        }

        function bottonePost(e){
            var idPersona = e.target.id;
            localStorage.idPersona = idPersona.substring(11, idPersona.length);
        }
    });
    $('#sendNewUser').click(newUser);
 }



 function newUser(){
    inserisciRecord(urlBaseJSONPlaceholder + 'users', $('#formNuovoUtente').serialize());
 }
