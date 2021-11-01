import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import raisins from '../assets/raisins.jpeg'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h3")
    expect(homeHeading.text()).toEqual("Welcome to Cat Tinder!")
  })
  it("displays a cat picture", () => {
    const home = shallow(<Home />)
    const homeImage = home.find("img")
    expect(homeImage.prop("src")).toEqual(raisins)
  })
})
