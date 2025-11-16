import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Đăng ký thành công", userCredential.user);
  });
