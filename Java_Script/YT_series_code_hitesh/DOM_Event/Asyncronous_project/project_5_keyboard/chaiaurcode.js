let insert=document.getElementById("insert");

window.addEventListener('keydown',(e)=>{
     insert.innerHTML=
     `<table border="1">
     <tr>
     <th>key</th>
     <th>keyCode</th>
     <th>code</th>
     </tr>
     
     <tr>
       <td>${e.key=== " " ? 'Space' : e.key}</td>
       <td>${e.keyCode}</td>
       <td>${e.code}</td>
     </tr>
    </table>`;
});