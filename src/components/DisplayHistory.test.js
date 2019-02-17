import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import DisplayHistory from './DisplayHistory'

afterEach(cleanup)

test('renders content', () => {
    const savedCities = [
        {
            name: 'laihia',
            temp: 6,
            humidity: 52,
            id: 12334
        }, 
        {
            name: 'puolanka',
            temp: -12,
            humidity: 23,
            id: 2345
        }
    ]

    const mockHandler = jest.fn()

    const component = render(
        <DisplayHistory 
            savedCities={savedCities} 
            handleCityNameClick={mockHandler}
          />
    )

    expect(component.container).toHaveTextContent('laihia')
})
