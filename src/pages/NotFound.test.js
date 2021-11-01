import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'
import notCat from '../assets/not-cat.jpeg'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound loads",() => {
  it("displays a header", () => {
    const notFound = shallow(<NotFound/>)
    expect(notFound.find("h3").text()).toEqual("Ooops, no cats here!")
  })
  it("displays an image",() => {
    const notFound = shallow(<NotFound/>)
    expect(notFound.find("img").prop("src")).toEqual(notCat)
  })
})
