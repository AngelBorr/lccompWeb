const formRegister = document.getElementById('formRegister')

formRegister.addEventListener('submit', (event) =>{
    event.preventDefault();
    const dataUser = new FormData(formRegister);
    const user = {};    
    dataUser.forEach((value, key) => user[key] = value);

    fetch('/api/admin/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>{
        if(result.status===200){
            window.location.replace('/login');
        }
    })
})