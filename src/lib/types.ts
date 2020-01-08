export interface Props {
	id: string
	debug?: boolean
	extraData?: any
}

export interface FormcarryResponse {
	code: number
	status: string
	title: string
	message: string
	redirect?: boolean
	referer?: string
}
