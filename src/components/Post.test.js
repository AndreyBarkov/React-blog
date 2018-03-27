import React from 'react';
import Post from './Post';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

const testPost = {
                    id: 0,
                    title: "Welcome to your Blog",
                    text: "This is a React-powered blog"
                };
   

enzyme.configure({ adapter: new Adapter() });

describe('Post component', () => {
    const initialState = {post:[]}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
         store = mockStore({});
         wrapper = enzyme.mount(<Post store={store} post={testPost} />)
    })


    it('should render without throwing and error when no posts', () => {
        let emptyStore = mockStore({});
        expect(enzyme.shallow(<Post store={emptyStore} />).exists(<div className="post"></div>)).toBe(true)
    })
    it('should render post data', () => {
        expect(wrapper.find('.post-title').text()).toEqual(testPost.title)
        expect(wrapper.find('.post-text').text()).toEqual(testPost.text)   
    })
    it('buttons should dispatch corresponding actions', () => {
       expect(wrapper.find('.edit-post').simulate('click'))
    })
});

//https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md 