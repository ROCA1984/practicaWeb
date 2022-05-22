console.log("mensaje...")

const formulario = document.querySelector('#formulario')
const btnenviar = document.querySelector('#btnenviar')
const btncargando = document.querySelector('#btncargando')
const toast = document.querySelector('.toast')


formulario.addEventListener('submit', (e) =>{
//console.log("formulario enviado")
e.preventDefault()
    const datos = new FormData(formulario)
    console.log("Email: ", datos.get('email'))
    console.log("Password: ", datos.get('pass'))
    console.log("Password: ", datos.get('check'))

    btnenviar.classList.add('d-none')
    btncargando.classList.remove('d-none')

    const eventoToast = new bootstrap.Toast(toast)
    eventoToast.show()

    window.setTimeout(()=>{
        
        btnenviar.classList.remove('d-none')
        btncargando.classList.add('d-none')
    },3000)



    formulario.reset()
})