import React from 'react'
import ReactDOM from "react-dom"
import Index from '..'

import ConnectApp, { App } from '../App'

import configureStore from '../store'
import { Provider as ReduxProvider } from 'react-redux'
import { shallow, mount } from 'enzyme'

const store = configureStore()

const Provider = ({store, children}) => (
     <ReduxProvider store={ store }>
        { children }
     </ReduxProvider>
)

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {

    it('renders without crashing', () => {
        expect(JSON.stringify(Index)).toMatchSnapshot()
    })

    describe('Provided <App />', () => {
		let providerApp;

		beforeEach(() => {
			const component = (
				<Provider store={ store }>
					<ConnectApp />
				</Provider>
			);

			providerApp = shallow(component)
		});

		describe('#render', () => {
			it('should render correctly with redux', () => {
				expect(providerApp).toBeDefined()
			})
		})
	})

})
