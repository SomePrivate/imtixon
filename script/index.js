const elForm = document.querySelector('.form')
const elInputLogin = document.querySelector('#login') 
const elInputPassword = document.querySelector('#pass')

elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputLoginValue = elInputLogin.value
    const inputPasswordValue = elInputPassword.value

    if(inputLoginValue && inputPasswordValue){
        requestLogin(inputLoginValue, inputPasswordValue )
    }
})


const requestLogin = (login, pass) => {
    fetch("https://reqres.in/api/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: login,
            password: pass,
        }),
    }).then(res => res.json()).then(data => {
        if(data?.token){
            window.localStorage.setItem("token", data.token)

            window.location.replace('./book.html')
        }
    })
    }



