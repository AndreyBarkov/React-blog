import React from 'react';
import List from './List';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const testPosts = [
    {
      id: 0,
      title: "Welcome to your Blog",
      text: "This is a React-powered blog"
    },
    {
        id: 1,
        title: "Second Post",
        text: "Bla bla bla lorem ipsum"
    }
  ];

enzyme.configure({ adapter: new Adapter() });

describe('List component', () => {

    it('should render without throwing and error when no posts', () => {
        expect(enzyme.shallow(<List posts={[]} />).exists(<div className="post-list"></div>)).toBe(true)
    })
    it('should render post array properly', ()=>{
        const wrapper = enzyme.shallow(<List  posts={testPosts} />);
        expect(wrapper.find('li')).toHaveLength(testPosts.length);
        
    })

});