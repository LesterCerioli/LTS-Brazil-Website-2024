"use client";

import { useState } from "react";

import { Container, StyledForm } from "@/components/styles/resetPasswordStyles";

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setErrorMessage("Password don't match!!");
            return;
        }

        const response = await fetch()

    }


}
export default ResetPassword;
