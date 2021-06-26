import Index from './index'

describe('Index', () => {
  const element = mount(<Index />)
  const renderedElement = shallow(<Index />)

  test('should render Index page correctly', () => {
    expect(renderedElement).toMatchSnapshot()
  })

  test('renders the Index children', () => {
    expect(element.find('div').length).toEqual(1)
  })

  test('should have no accessibility issues', async () => {
    expect(await axe(element.getDOMNode())).toHaveNoViolations()
  })
})
