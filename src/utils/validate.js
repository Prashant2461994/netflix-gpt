import { errorMessages } from "./errorMessages";

export const checkValidData = (email,password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

    let messages= [];

    if(!isEmailValid)   messages.push(errorMessages.emailMsg);
    if(!ispasswordValid) messages.push(errorMessages.passwordMsg);
    
    return messages;
}