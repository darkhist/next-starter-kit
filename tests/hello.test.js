import { shallow } from 'enzyme';
import Home from '../pages/index';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
