export const validateLogin = ({ username, password }) => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required.";
    if (!password.trim()) errors.password = "Password is required.";
    return errors;
  };
  
  export const validateRegister = ({ username, email, password, confirmPassword }) => {
    const errors = {};
    if (!username.trim()) errors.username = "Username is required.";
    if (!email.trim() || !email.includes("@")) errors.email = "Valid email is required.";
    if (!password.trim()) errors.password = "Password is required.";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords must match.";
    return errors;
  };
  
  export const validateNote = ({ title, content }) => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required.";
    if (!content.trim()) errors.content = "Content is required.";
    return errors;
  };
  