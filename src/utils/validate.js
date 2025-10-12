export const validateStatus = (email, password, fullname=null) => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailMsg = regex.test(email);
    
    const passwordMsg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(fullname !== null) {
      let nameRegex = /^[a-zA-Z][a-zA-Z]{5,19}$/;
      const fullNameMsg = nameRegex.test(fullname);
      if(!fullNameMsg) return "Your Full Name is not Valid";
    }
    
    if(!emailMsg) return "Email Address not Valid";
    if(!passwordMsg) return "Password not Valid";

    return null;
}