/// <reference types="react" />
import { Props, FormcarryResponse } from './lib/types'
export default function useForm(
	props: Props,
): {
	state: {
		error: any
		response: FormcarryResponse
		submitting: boolean
		submitted: boolean
	}
	submit: (event: import('react').FormEvent<HTMLFormElement>) => void
}
