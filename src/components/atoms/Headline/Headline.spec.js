import Headline from './Headline'

describe('Headline', () => {
  const props = {
    tag: 'h3',
    children: 'Test',
  }

  const element = mount(<Headline {...props} />)
  const renderedElement = shallow(<Headline {...props} />)

  test('should render Headline correctly', () => {
    expect(renderedElement).toMatchSnapshot()
  })

  test('renders the Headline children', () => {
    expect(element.find('h3').length).toEqual(1)
  })

  test('should have no accessibility issues', async () => {
    expect(await axe(element.getDOMNode())).toHaveNoViolations()
  })
})
