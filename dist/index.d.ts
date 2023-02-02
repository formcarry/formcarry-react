import React from 'react'
import { Props, FormcarryResponse } from './lib/types'
declare function useForm(
	props: Props,
): {
	state: {
		error: any
		response: FormcarryResponse | undefined
		submitting: boolean
		submitted: boolean
	}
	submit: (event: React.FormEvent<HTMLFormElement>) => void
}
export { useForm }
