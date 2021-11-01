import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatShow renders", () => {
  const cat = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention"
  }
  it("displays a card", () => {
    const catShow = shallow(<CatShow cat={cat}/>)
    const card = catShow.find("Card")
    expect(card.length).toEqual(1)
    const cardTitle = catShow.find("CardTitle")
    expect(cardTitle.length).toEqual(1)
    const cardText = catShow.find("CardText")
    expect(cardText.length).toEqual(2)
  })
})
