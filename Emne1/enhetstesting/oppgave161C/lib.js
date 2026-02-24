 function isEmail(email) {
     if (typeof email !== "string") return false;

      return /^[^@\s]*\.[^@\s]*@[^@\s]*\.[^@\s]+$/.test(email);
 }