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