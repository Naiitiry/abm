function guardar() {

    let n = document.getElementById("txtNombre").value
    let p = document.getElementById("txtRaza").value
    let s = parseInt(document.getElementById("txtEdad").value)

    let producto = {
        nombre: n,
        raza: p,
        edad: s
    }
    let url = "http://rdanchuk.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./index.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })

}
