let username=prompt("Who's there?");
if(username==""){
    alert("Cancelled");
}
else if(username==="Admin"){
    let password=prompt("Password?");
    if(password==="TheMaster"){
        alert("Welcome!");
    }
    else if(password===""){
        alert("Cancelled");
    }
    else{
        alert("Wrong password");
    }
}
else{
    alert("I don't know you");
}

