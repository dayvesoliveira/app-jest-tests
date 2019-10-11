import { MOCK_POSTS } from "../../../../config/tests/__mocks__/posts.mock"

import { 
    selectCrud,
    selectPosts
} from "../selector"

describe('#selectors',()=>{
    const mockState = {
        crudReducer:{ 
            search: {
                list: MOCK_POSTS
            }
        }
    }

    describe('selectCrud', ()=>{
        it('should return the array `selectCrud`.', ()=>{
			expect(selectCrud(mockState)).toEqual({list: MOCK_POSTS })
        })
    })

    describe('selectPosts', ()=>{
        it('should return the array `selectPosts`.', ()=>{
			expect(selectPosts(mockState)).toEqual(MOCK_POSTS)
        })
    })
})