import { Router } from 'express';

import {
    handleLoginUser,
    handleVerifyUserEmail,
    handleResetPassword
  } from "./local.controller";

const router = Router();

//Login
// auth/local/login
router.post("/login", handleLoginUser);

//Change password
// auth/local/change-password

//Reset password
// auth/local/password-reset
router.get("/password-reset", handleResetPassword)

//Verify email
// auth/local/activate/*hexToken*
router.get("/activate/:token", handleVerifyUserEmail);

export default router;