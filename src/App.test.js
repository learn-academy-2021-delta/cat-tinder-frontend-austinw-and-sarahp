import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('When the app renders', ()=>{
  it('displays a header and footer', ()=>{

    const renderedApp = shallow(<App/>)

    const renderedHeader = renderedApp.find("Header")

    const renderedFooter = renderedApp.find("Footer")
    
    expect(renderedHeader.length).toEqual(1)

    expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route "/" to the home component', ()=>{
    
    const renderedApp = shallow(<App/>)

    const renderedHomeRoute = renderedApp.find('[path="/"]')

    // console.log("props", renderedHomeRoute.props())
    
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
  it('provides a route "/catindex" to the CatIndex component', ()=>{
    
    const renderedApp = shallow(<App/>)

    const renderedCatIndexRoute = renderedApp.find('[path="/catindex"]')
    expect(renderedCatIndexRoute.props().component).toEqual(CatIndex)
  })
})