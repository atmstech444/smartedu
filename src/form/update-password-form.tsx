import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import PUT_ChangePassword from "@/api/PUT_ChangePassword";
import Input from "@/components/form/Input";

const UpdatePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const user = useAppSelector((state) => state.user.user);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (user) {
      if (password === passwordConfirmation) {
        try {
          await PUT_ChangePassword({
            current_password: oldPassword,
            new_password: password,
            confirm_password: passwordConfirmation,
            token: user.token,
          });

          resetForm();
        } catch {
          toast.error("Failed to change password", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
      } else {
        toast.error("Passwords do not match", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    }
  };

  const resetForm = () => {
    setOldPassword("");
    setPassword("");
    setPasswordConfirmation("");
  };

  const togglePasswordVisibility = (inputName: string) => {
    switch (inputName) {
      case "oldPassword":
        setShowOldPassword(!showOldPassword);
        break;
      case "password":
        setShowPassword(!showPassword);
        break;
      case "passwordConfirmation":
        setShowPasswordConfirmation(!showPasswordConfirmation);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign__input-wrapper">
        <H5>მიმდინარე პაროლი</H5>
        <div className="sign__input mb-25">
          <input name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type={showOldPassword ? "text" : "password"} placeholder="მიმდინარე პაროლი" required />
          <i className="fal fa-lock"></i>
          <i className={`toggle-password fal ${showOldPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={() => togglePasswordVisibility("oldPassword")} style={{ marginLeft: "330px", cursor: "pointer" }}></i>
        </div>

        <div className="sign__input-wrapper mb-25">
          <H5>ახალი პაროლი</H5>
          <div className="sign__input">
            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="ახალი პაროლი" required />
            <i className="fal fa-lock"></i>
            <i className={`toggle-password fal ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={() => togglePasswordVisibility("password")} style={{ marginLeft: "330px", cursor: "pointer" }}></i>
          </div>
        </div>

        <div className="sign__input-wrapper mb-10">
          <H5>გაიმეორე ახალი პაროლი</H5>
          <div className="sign__input">
            <input name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} type={showPasswordConfirmation ? "text" : "password"} placeholder="გაიმეორე ახალი პაროლი" required />
            <i className="fal fa-lock"></i>
            <i className={`toggle-password fal ${showPasswordConfirmation ? "fa-eye" : "fa-eye-slash"}`} onClick={() => togglePasswordVisibility("passwordConfirmation")} style={{ marginLeft: "330px", cursor: "pointer" }}></i>
          </div>
        </div>
      </div>

      <button type="submit" style={{ marginTop: "31px" }} className="e-btn w-100">
        <span></span> შენახვა
      </button>
    </form>
  );
};

const H5 = styled.h5`
  font-size: 16px;
  font-weight: 500;
  color: #0e1133;
  margin-bottom: 11px;
`;

export default UpdatePasswordForm;
