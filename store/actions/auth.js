export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
   
    console.log(password);
  return async (dispatch) => {
    const respons = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkQyJWuHBkgZ95ZKsNnC0MZciQ2cfkEUI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!respons.ok) {
      throw new Error("Something went wrong!");
    }
    const resData = await respons.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};

export const login = (email, password) => {
  console.log(password);
  return async (dispatch) => {
    const respons = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkQyJWuHBkgZ95ZKsNnC0MZciQ2cfkEUI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!respons.ok) {
      const errorResData = await respons.json();
      const errorId = errorResData.error.message;
        message='Something went wrong!';
      if (errorId === 'EMAIL_NOT_FOUND') {
          message = 'This email cannot be found!'
      } else if (errorId === 'INVALID_PASSWORD') {
           message = "This password is not valid!";
      }
      throw new Error(message);
    }
    const resData = await respons.json();
    console.log(resData);
    dispatch({ type: LOGIN });
  };
};
