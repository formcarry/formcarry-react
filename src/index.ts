import React, { useState, useEffect } from 'react'
import { Props, FormcarryResponse } from './lib/types'
import { errorHandler, noIdHandler } from './lib/handler'

function useForm(props: Props) {
	const { id, debug = true, extraData } = props
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [submitting, setSubmitting] = useState<boolean>(false)
	const [error, setError] = useState<any>(undefined)
	const [response, setResponse] = useState<FormcarryResponse>()

	useEffect(() => {
		if (error && debug) {
			errorHandler(error)
		}
	}, [debug, error])

	function submit(event: React.FormEvent<HTMLFormElement>) {
		// prevent redirection
		event.preventDefault()

		if (!id) {
			noIdHandler()
			return
		}

		const data = new FormData(event.currentTarget)

		if (typeof extraData === 'object') {
			for (const item in extraData) {
				if (extraData.hasOwnProperty(item)) {
					data.append(item, extraData[item])
				}
			}
		}

		// reset states.
		setSubmitted(false)
		setError(undefined)
		setResponse(undefined)

		setSubmitting(true)

		fetch(`https://formcarry.com/s/${id}`, {
			method: 'POST',
			headers: { Accept: 'application/json' },
			body: data,
		})
			.then(res => res.json())
			.then((res: FormcarryResponse) => {
				if (res.code === 200) {
					setSubmitted(true)
					setResponse(res)
				} else {
					setError(res)
				}
			})
			.catch(err => {
				setError(err)
			})
			.finally(() => {
				setSubmitting(false)
			})
	}

	return { state: { error, response, submitting, submitted }, submit }
}

export { useForm }
