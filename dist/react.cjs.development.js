'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var react = require('react')

var backgroundColor = '#262335'
var backgroundProperty = 'background-color: ' + backgroundColor
var yellow = '#FEDE5D'
var pink = '#D86FD4'
var orange = '#F88839'
var gray = '#E2E1E5'
var grayDarker = '#B3AEAE'
var turquoise = '#36F5F3'
var lightBlue = '#84C9F4'
function errorHandler(err) {
	console.group('%c 🚨 Formcarry Error 🚨', 'background: #E44141; color: #fff')
	console.table(err)
	console.log(
		'%cif you want to disable debugging, just set debug to false like:',
		'color: #11C759',
	)
	console.log(
		'%cconst %c{state, submit} %c= %cuseForm%c(%c{ %cdebug%c: %cfalse %c}%c);',
		backgroundProperty + '; color: ' + yellow,
		backgroundProperty + '; color: ' + pink,
		backgroundProperty + '; color: ' + gray,
		backgroundProperty + '; color: ' + turquoise,
		backgroundProperty + '; color: ' + pink,
		backgroundProperty + '; color: ' + turquoise,
		backgroundProperty + '; color: ' + yellow,
		backgroundProperty + '; color: ' + grayDarker,
		backgroundProperty + '; color: ' + orange,
		backgroundProperty + '; color: ' + lightBlue,
		backgroundProperty + '; color: ' + pink,
	)
	console.groupEnd()
}
function noIdHandler() {
	console.log(
		'%c💥 Please set your form ID, you can get it from your dashboard: https://formcarry.com/profile/my-forms',
		'background-color: #FCB56D; color: #000',
	)
	console.log(
		'%cconst %c{state, submit} %c= %cuseForm%c(%c{ %cid%c: %c"Your Form ID" %c}%c);',
		backgroundProperty + '; color: ' + yellow,
		backgroundProperty + '; color: ' + pink,
		backgroundProperty + '; color: ' + gray,
		backgroundProperty + '; color: ' + turquoise,
		backgroundProperty + '; color: ' + pink,
		backgroundProperty + '; color: ' + turquoise,
		backgroundProperty + '; color: ' + yellow,
		backgroundProperty + '; color: ' + grayDarker,
		backgroundProperty + '; color: ' + orange,
		backgroundProperty + '; color: ' + lightBlue,
		backgroundProperty + '; color: ' + pink,
	)
}

function useForm(props) {
	var id = props.id,
		_props$debug = props.debug,
		debug = _props$debug === void 0 ? true : _props$debug,
		extraData = props.extraData
	var _useState = react.useState(false),
		submitted = _useState[0],
		setSubmitted = _useState[1]
	var _useState2 = react.useState(false),
		submitting = _useState2[0],
		setSubmitting = _useState2[1]
	var _useState3 = react.useState(undefined),
		error = _useState3[0],
		setError = _useState3[1]
	var _useState4 = react.useState(),
		response = _useState4[0],
		setResponse = _useState4[1]
	react.useEffect(
		function() {
			if (error && debug) {
				errorHandler(error)
			}
		},
		[debug, error],
	)
	function submit(event) {
		event.preventDefault()
		if (!id) {
			noIdHandler()
			return
		}
		var data = new FormData(event.currentTarget)
		if (typeof extraData === 'object') {
			for (var item in extraData) {
				if (extraData.hasOwnProperty(item)) {
					data.append(item, extraData[item])
				}
			}
		}
		setSubmitted(false)
		setError(undefined)
		setResponse(undefined)
		setSubmitting(true)
		fetch('https://formcarry.com/s/' + id, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: data,
		})
			.then(function(res) {
				return res.json()
			})
			.then(function(res) {
				if (res.code === 200) {
					setSubmitted(true)
					setResponse(res)
				} else {
					setError(res)
				}
			})
			['catch'](function(err) {
				setError(err)
			})
			['finally'](function() {
				setSubmitting(false)
			})
	}
	return {
		state: {
			error: error,
			response: response,
			submitting: submitting,
			submitted: submitted,
		},
		submit: submit,
	}
}

exports.useForm = useForm
//# sourceMappingURL=react.cjs.development.js.map
