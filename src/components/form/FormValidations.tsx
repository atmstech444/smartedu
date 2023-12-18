export const validate_email = (email: string) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    return "ელ. ფოსტა აუცილებელია";
  } else if (!emailPattern.test(email)) {
    return "ელ. ფოსტა არასწორია";
  }
  return null;
};

export const validate_login_password = (password: string) => {
  if (password.trim() === "") {
    return "პაროლი აუცილებელია";
  }
  return null;
};

export const validate_name = (name: string) => {
  const namePattern = /^[a-zA-Z\u10A0-\u10FF\s]{2,}$/u;

  if (name.trim() === "") {
    return "სახელი აუცილებელია";
  } else if (!namePattern.test(name)) {
    return "სახელი არასწორია";
  }

  return null;
};

export const validate_surname = (surname: string) => {
  const namePattern = /^[a-zA-Z\u10A0-\u10FF\s]{2,}$/u;

  if (surname.trim() === "") {
    return "გვარი აუცილებელია";
  } else if (!namePattern.test(surname)) {
    return "გვარი არასწორია";
  }

  return null;
};

export const validate_password = (password: string) => {
  if (password.trim() === "") {
    return "პაროლი აუცილებელია";
  } else if (password.length < 6) {
    return "მინიმუმ 6 სიმბოლო";
  } else if (!/(?=.*[a-z])/.test(password)) {
    return "მინიმუმ 1 ასო";
  } else if (!/(?=.*[A-Z])/.test(password)) {
    return "მინიმუმ 1 დიდი ასო";
  } else if (!/(?=.*\d)/.test(password)) {
    return "მინიმუმ 1 ციფრი";
  } else if (!/(?=.*[@$!%*?&])/.test(password)) {
    return "მინიმუმ 1 სპეციალური სიმბოლო";
  }

  return null;
};

export const validate_confirm_password = (password: string, confirmPassword: string) => {
  if (confirmPassword.trim() === "") {
    return "პაროლის დადასტურება აუცილებელია";
  } else if (confirmPassword !== password) {
    return "პაროლები არ ემთხვევა";
  }

  return null;
};

export const validate_phone_number = (phoneNumber: string) => {
  const phonePattern = /^5\d{8}$/;
  if (phoneNumber.trim() === "") {
    return "ტელეფონის ნომერი აუცილებელია";
  } else if (!phonePattern.test(phoneNumber)) {
    return "არასწორი ტელეფონის ნომერი";
  }

  return null;
};

export const validate_required_string = (string: string) => {
  const containsNumbersOrSymbols = /[0-9!@#$%^&*()_+={}[\]:;'"<>?/\\|.,-]/;
  if (string.trim() === "") {
    return "ველი აუცილებელია";
  } else if (containsNumbersOrSymbols.test(string)) {
    return "მხოლოდ ასოები";
  }
  return null;
};
