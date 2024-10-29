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

        try {
            const response = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, token, newPassword }),
            });
            if (!response.ok)
            {
               throw new Error("Failed to reset password.");
            }
            setErrorMessage("Password reset successfully.");

        } catch (error) {
            setErrorMessage("There was an error reseting ypur password.");

        }

        

    };
    return (
        
    )


}
export default ResetPassword;
