import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import cats from './mockCats.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When the app renders", () => {
  it("displays a header and footer", () => {
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route "/" to the home component', () => {
    const renderedApp = shallow(<App/>)
    const home = renderedApp.find('[path="/"]')
    expect(home.props().component).toEqual(Home)
  })
  it('provides a route "/catindex" to the CatIndex component', () => {
    const renderedApp = shallow(<App/>)
    const catIndex = renderedApp.find('[path="/catindex"]')
    expect(catIndex.props().render()).toEqual(<CatIndex cats={cats} />)
  })
  it('provides a route "/catshow" to the CatShow component', () => {
    const renderedApp = shallow(<App/>)
    const catShow = renderedApp.find('[path="/catshow/:id"]')
    const catShowRender = catShow.props().render
    expect(catShowRender.length).toEqual(1)
    // expect(catShowRender.props().render()).toEqual(<CatShow cats={cats[0]} />)
  })
})
