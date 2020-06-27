var curr=null;

function onAddPet(){
    document.getElementById("frmAgregar").classList.remove("hide")
}

function onFormSubmit(){
    if(Validar()){
        var frmData = frmRead();
        document.getElementById("frmAgregar").classList.add("hide")
        console.log(frmData)
        if(curr==null)
            tabInsert(frmData);
        else
            tabUpdate(frmData);
        frmReset();
    }
}

function Validar() {
    isValid = true;
    if (document.getElementById("ipName").value == ""){
        isValid = false;
        document.getElementById("ipName").style.border='solid 1px red';
    }
    if (document.getElementById("ipRaza").value == ""){
        isValid = false;
        document.getElementById("ipRaza").style.border='solid 1px red';
    }
    if (document.getElementById("ipTelefono").value == ""){
        isValid = false;
        document.getElementById("ipTelefono").style.border='solid 1px red';
    }
    if (document.getElementById("ipPais").value == ""){
        isValid = false;
        document.getElementById("ipPais").style.border='solid 1px red';
    }
    if (document.getElementById("ipDescripcion").value == ""){
        isValid = false;
        document.getElementById("ipDescripcion").style.border='solid 1px red';
    }
    return isValid;
}

function frmRead(){
    var frmData = {};
    frmData["Name"]=document.getElementById("ipName").value;
    frmData["Apellido"]=document.getElementById("ipApellido").value;
    frmData["Raza"]=document.getElementById("ipRaza").value;
    frmData["Telefono"]=document.getElementById("ipTelefono").value;
    frmData["Pais"]=document.getElementById("ipPais").value;
    frmData["URL"]=document.getElementById("ipUrl").value;
    frmData["Descripcion"]=document.getElementById("ipDescripcion").value;
    return frmData;
}

function tabInsert(data){
    var tab = document.getElementById("tabMascotas").getElementsByTagName('tbody')[0];
    var row = tab.insertRow(tab.length)
    cell1=row.insertCell(0);
    cell1.innerHTML = data.Name + " " +data.Apellido;
    cell2=row.insertCell(1);
    cell2.innerHTML = data.Telefono;
    cell3=row.insertCell(2);
    cell3.innerHTML = data.Raza;
    cell4=row.insertCell(3);
    cell4.innerHTML = data.Pais;
    cell5=row.insertCell(4);
    cell5.innerHTML = data.Descripcion;
    cell6=row.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

function frmReset(){
    document.getElementById("ipName").value="";
    document.getElementById("ipApellido").value="";
    document.getElementById("ipRaza").value="";
    document.getElementById("ipTelefono").value="";
    document.getElementById("ipPais").value="";
    document.getElementById("ipUrl").value="";
    document.getElementById("ipDescripcion").value="";
    curr=null
}

function onEdit(data){
    onAddPet();
    curr=data.parentElement.parentElement;
    let n= curr.cells[0].innerHTML.split(" ");
    document.getElementById("ipName").value=n[0];
    document.getElementById("ipApellido").value=n[1];
    document.getElementById("ipRaza").value=curr.cells[2].innerHTML;
    document.getElementById("ipTelefono").value=curr.cells[1].innerHTML;
    document.getElementById("ipPais").value=curr.cells[4].innerHTML;
    document.getElementById("ipUrl").value="";
    document.getElementById("ipDescripcion").value=curr.cells[2].innerHTML;
}

function onDelete(data){
    let row=data.parentElement.parentElement;
    document.getElementById("tabMascotas").deleteRow(row.rowIndex);
    frmReset();
}

function tabUpdate(data){
    curr.cells[0].innerHTML=data.Name + " " +data.Apellido;
    curr.cells[1].innerHTML=data.Telefono;
    curr.cells[2].innerHTML=data.Raza;
    curr.cells[3].innerHTML=data.Pais;
    curr.cells[4].innerHTML=data.Descripcion;
}