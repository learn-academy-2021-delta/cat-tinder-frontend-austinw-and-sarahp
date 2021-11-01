import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatEdit renders", () => {
  it("displays a heading", () => {
    const catEdit = shallow(<CatEdit />)
    const editheading = catEdit.find("h3")
    expect(editheading.text()).toEqual("Update Cat Information")
  })
  it("displays a form", () => {
    const catEdit = shallow(<CatEdit />)
    const formGroup = catEdit.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = catEdit.find("Label")
    expect(label.length).toEqual(3)
    const input = catEdit.find("Input")
    expect(input.length).toEqual(3)
  })
})
