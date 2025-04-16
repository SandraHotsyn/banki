import css from "./LoginSignup.module.css";
import { Formik, Form } from "formik";

const LoginSignup = () => {
  return (
    <div className={css.loginSignup}>
      <div className={css.loginSignupContainer}>
        <h3>Реєстрація</h3>
        <div className={css.loginSignupFilds}>
          <input type="text" placeholder="Введіть Ваше ім'я" />
          <input type="email" placeholder="Введіть Ваш email" name="" id="" />
          <input type="password" name="" id="" placeholder="Введіть пароль" />
        </div>
        <button>Зареєструватися</button>
        <p className={css.loginSignupLogin}>
          Вже є акаунт? <span>Увійти тут</span>{" "}
        </p>
        <div className={css.loginSignupAgree}>
          <input type="checkbox" name="" id="" />
          <p>
            Я погоджуюся з умовами використання та політикою конфіденційності
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
