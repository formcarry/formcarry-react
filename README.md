# Formcarry React

React library of [formcarry](https://formcarry.com).

## Getting Started

Run this command to install with yarn:

```
yarn add @formcarry/react
```

or with npm:

```
npm install --save @formcarry/react
```


*You have to have React as a dependency in your project in order to use this library.*

Also this package uses [React Hooks](https://reactjs.org/docs/hooks-intro.html), therefore you have to use React >= 16.8.0

### Example

A simple demonstration with React library:

```jsx
import { useForm } from '@formcarry/react';

function MyFormcarry() {
  // Call the `useForm` hook in your function component
  const {state, submit} = useForm({
    id: 'Your-Form-ID-From-Formcarry'
  });

  // Success message
  if (state.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }

  return (
    <form onSubmit={submit}>
		<label htmlFor="name">Name</label>
		<input id="name" type="text" name="text" />

		<label htmlFor="surname">Surname</label>
		<input id="surname" type="text" name="surname" />
		
		<label htmlFor="email">Email</label>
		<input id="email" type="email" name="email" />
		
		<label htmlFor="message">Message</label>
		<textarea id="message" name="message" />
		
		<button type="submit">Send</button>
    </form>
  );
}
```
You have to use a `<form>` element and pass `submit` as the `onSubmit` handler.

### Destructuring with different field name
We return `state` and `submit` from `useForm` by default, but you can rename it to whatever you want, like this:

```jsx
import { useForm } from '@formcarry/react';

function MyFormcarry() {
  const {state: formcarryState, submit: formcarrySubmit} = useForm({
	id: 'Your-Form-ID-From-Formcarry'
  });

  if (formcarryState.submitted) {
    return <div>Thank you! We received your submission.</div>;
  }

  return (
    <form onSubmit={formcarrySubmit}>
		<label htmlFor="name">Name</label>
		<input id="name" type="text" name="text" />

		<label htmlFor="surname">Surname</label>
		<input id="surname" type="text" name="surname" />
		
		<label htmlFor="email">Email</label>
		<input id="email" type="email" name="email" />
		
		<label htmlFor="message">Message</label>
		<textarea id="message" name="message" />
		
		<button type="submit">Send</button>
    </form>
  );
}
```


### Example with Extra Data

```js
import { useForm } from '@formcarry/react';

function MyFormcarry() {
  // Call the `useForm` hook in your function component
  const {state, submit} = useForm({
	id: 'Your-Form-ID-From-Formcarry',
	extraData: {
		// add whatever you want
		screenSize: `${window.screen.width}x${window.screen.height}`,
		language: window.navigator.language,
	}
  });

  ...
}
```


You can pass those to `useForm`:

| Key         	| Description                                                   |
| :-----------	| :------------------------------------------------------------ |
| `id`			| Your Form ID, which you can get it from [formcarry](https://formcarry.com) |
| `debug`		| Boolean, it prints out logs to the console, true by default |
| `extraData`	| Accepts object, it will mix those object with form fields |



The `state` object contains the following:

| Key          | Description                                                   |
| :----------- | :------------------------------------------------------------ |
| `submitting` | A Boolean indicating whether the form is currently submitting |
| `submitted`  | A Boolean indicating whether the form successfully submitted  |
| `response`   | Returns formcarry successful response  |
| `error`      | Returns formcarry error				                    |
