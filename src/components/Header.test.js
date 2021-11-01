import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header loads",() => {
  it("displays NavLinks", () => {
    const header = shallow(<Header/>)
    const navLink = header.find("NavLink")
    expect(navLink.length).toEqual(3)
  })
  it("provides a link to the local ASPCA",() => {
    const header = shallow(<Header/>)
    const navLink = header.find('[id="aspca"]')
    expect(navLink.length).toEqual(1)
  })
})
