function register(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
        return;
    }
    localStorage.setItem(type + "Email", email);
    localStorage.setItem(type + "Password", password);
    alert('Registration successful! Now can you login in');
    box.querySelector('input[type="email"]').value = "";
box.querySelector('input[type="password"]').value = "";
    bootstrap.Modal.getInstance(box).hide();
}
function login(type){
    let box = document.querySelector(`#${type}`);
    let email = box.querySelector('input[type="email"]').value;
    let password = box.querySelector('input[type="password"]').value;
    if(email === "" || password === ""){
        alert('please enter email and password');
    return;
    }
    if(email === localStorage.getItem(type + "Email") && password === localStorage.getItem(type + "Password")){
        alert('login successful!');
        bootstrap.Modal.getInstance(box).hide();
    }else {
        alert('Invalid email or password');
    }
}