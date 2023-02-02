fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=` <tr>
        <td>${values.Userid}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})