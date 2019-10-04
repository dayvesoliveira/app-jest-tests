import React from 'react'
import ReactDOM from "react-dom"
import Index from '..'

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {

    it('renders without crashing', () => {
        expect(JSON.stringify(Index)).toMatchSnapshot();
    })

})