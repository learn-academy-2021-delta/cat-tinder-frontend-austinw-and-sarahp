# Cat Tinder Frontend

Set up
- $ yarn create react-app cat-tinder-frontend
- $ cd cat-tinder-frontend
- $ git remote add origin https://github.com/learn-academy-2021-delta/cat-tinder-frontend-austinw-and-sarahp.git
- $ git checkout -b main
- initial commit to repo

Frontend Structure
- $ git checkout -b frontend-structure
- $ yarn add react-router-dom
- created folders components, pages, assets
- $ yarn add bootstrap
- $ yarn add reactstrap
- Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
- Added mock cats
- Added routes to each page
- Styled Header, Footer, NotFound


Testing with Jest Enzyme
- Jest, built by Facebook
- Enzyme, built by AirBnb

- Jest is our test runner and our assertion library
- Enzyme is brining in added utilities and live rendering of React nodes

Testing Commands
`$ yarn test`
`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

Testing Imports and configurations
```javascript
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
```
Testing Syntax Example
```javascript
describe("",()=>{
    it("",()=>{
        const renderedVariableName = shallow(<Component/>)
        const thingBeingLookedFor = renderedVariableName.find("[attribute]")
        const otherThingBeingLookedFor = renderedVariableName.find("ComponentName")
        expect(thingBeingLookedFor.props().component).toEqual(SomeComponent)    
        expect(otherThingBeingLookedFor.length).toEqual(1)
    })
})
```
Selector Syntax

- [Enzyme Selector Docs](https://enzymejs.github.io/enzyme/docs/api/selector.html)

Assertion Syntax
```javascript
    expect(<componentVariable>.<elementQueryMethod>()).<matcher>(<expectedValue>)
```
```javascript
    expect(<actualThing>).<matcher>(<expectedValue>)
```

Helpful Methods 

- .debug()
- .props()
