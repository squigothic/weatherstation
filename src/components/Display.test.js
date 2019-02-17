import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, fireEvent, getByText } from 'react-testing-library'
import Display from './Display'

afterEach(cleanup)

test('renders content', () => {
    const city = {
        name: "laihia",
        temp: 6,
        humidity: 52,
        id: 12334
    }

    const mockHandler = jest.fn()

    const component = render(
        <Display 
            currentData={ city } 
            handleSaveClick={ mockHandler }/>
    )

    expect(component.container).toHaveTextContent('Current weather in laihia')
    expect(component.container).toHaveTextContent('Temp: 6')
})

it('clicking the save button calls eventhandler once', () => {
    const city = {
        name: "laihia",
        temp: 6,
        humidity: 52,
        id: 12334
    }

    const mockHandler = jest.fn()

    const { getByText } = render(
        <Display 
            currentData={ city } 
            handleSaveClick={ mockHandler }/>
    )
    
    const button = getByText('Save location')
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(1)
})