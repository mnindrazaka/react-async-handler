# react-async-handler
React hook for handling asynchronous task

## Install

```bash
npm install react-async-handler
```

## Usage

```javascript
import useAsyncHandler from 'react-async-handler'

const [execute, { status, data, error }] = useAsyncHandler(() => fetch('https://jsonplaceholder.typicode.com/todos'))
```

## API

### Return type

#### execute

type `(...args: any[]) => Promise<any>`

This is the function to execute the async function

#### status

type `string`

The status of the async process, the value can be `idle` `loading` `success` or `error`

#### data

type `any`

The data that returned from the `Promise`

#### error

type `Error`

The error object that caught from `Promise`

### Parameters

#### callback

type `(...args: any[]) => Promise<any>`

This is the function that return a `Promise` that you want to execute