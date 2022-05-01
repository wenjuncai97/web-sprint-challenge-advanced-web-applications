// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import Spinner from './Spinner'
import {render, screen, rerender} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('sanity', () => {
  expect(true).toBe(true)
})

test("renders nothing if spinner is false", () => {
  render(<Spinner on={false}/>)
  const notLoading = screen.queryByText(/Please wait.../i)
  expect(notLoading).not.toBeInTheDocument();
})

test("renders spinner if spinner is true", () => {
  render(<Spinner on={true}/>)
  const notLoading = screen.queryByText(/Please wait.../i)
  expect(notLoading).toBeInTheDocument();
})