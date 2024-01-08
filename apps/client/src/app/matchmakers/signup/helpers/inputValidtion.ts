import { atom } from "jotai";

export const passwordValidet = {
  required: 'שדה נדרש!',
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
    message:
      'הסיסמה חייבת להכיל אות גדולה, אות קטנה, ספרה, תו מיוחד, ולהיות באורך 8-20 תווים.',
  },
};

export const emailValidet = {
  required: 'שדה נדרש!',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'כתובת מייל לא חוקית',
  },
};
export const nameValidet = {
  required: 'שם פרטי - שדה נדרש!',
  minLength: {
    value: 2,
    message: 'שם לא חוקי',
  },
  pattern: {
    value: /^[a-zA-Z\u0590-\u05FF]+$/,
    message: 'יש להזין אותיות בלבד',
  },
};

export const lastName = {
  required: 'שם משפחה - שדה נדרש!',
  minLength: {
    value: 2,
    message: 'שם לא חוקי',
  },
  pattern: {
    value: /^[a-zA-Z\u0590-\u05FF]+$/,
    message: 'יש להזין אותיות בלבד',
  },
};

export const requiredValidet = {
  required: 'שדה נדרש!',
};

export const phoneValidet = {
  required: 'שדה נדרש!',
  pattern: {
    value: /^\d{9,10}$/,
    message: 'מספר נייד/נייח לא חוקי',
  },
};

export const genderValidet = {
  required: 'שדה נדרש!',
  validate: (value: unknown) => {
    if (value !== 'male' && value !== 'female') {
      return 'שדה נדרש!';
    }
  },
};
export const page = atom(1)
// export const idValidet = {
//   required: "⚠ Required field",
//   pattern: {
//     value: /^\w{5,10}$/,
//     message: "⚠ Invalid Personal ID",
//   },
// };

// export const houseValidet = {
//   required: "⚠ Required field",
//   pattern: {
//     value: /^[0-9]+$/,
//     message: "⚠ Invalid House Number",
//   },
// };
