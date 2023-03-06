let userName = prompt("Who's there?");

if(userName === 'Admin'){
    let password = prompt('What\'s your password?');
    
    if(password === 'TheMaster')
        alert('Welcome!');
    else if(password === '' || password === null)
        alert('Canceled');
    else
        alert('Wrong Password!');     
}
else if (userName === '' || userName === null) 
    alert('Canceled');
else 
    alert("I don't know you");
  