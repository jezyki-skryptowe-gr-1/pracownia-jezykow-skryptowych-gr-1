import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api';
import type { LoginFormData, SignupFormData } from '../schemas';

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: LoginFormData) => authApi.login(data),
    });
};

export const useSignupMutation = () => {
    return useMutation({
        mutationFn: (data: SignupFormData) => authApi.signup(data),
    });
};