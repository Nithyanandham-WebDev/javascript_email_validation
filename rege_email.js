function validationemail(num){
    const re = /\S+@\S+\.\S+/g;
    let result = re.test(email);
    if (result){
        console.log("the mail valid");
    }

}

let email = prompt("enter the email:")
validationemail(email);