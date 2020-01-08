/// <reference types="react" />
import { Props, FormcarryResponse } from './lib/types';
declare function useForm(props: Props): {
    state: {
        error: any;
        response: FormcarryResponse;
        submitting: boolean;
        submitted: boolean;
    };
    submit: (event: import("react").FormEvent<HTMLFormElement>) => void;
};
export { useForm };
