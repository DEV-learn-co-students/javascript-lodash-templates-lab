describe('index', () => {

  describe('functions', () => {
    before(() => {
      window._ = require('lodash')
    })

    describe('createPost', () => {
      it('exists', () => {
        expect(createPost).toExist("Must have a function named createPost")
      })
    })

    describe('postComment', () => {
      it('exists', () => {
        expect(postComment).toExist("Must define a function named postComment")
      })
    })
  })

})
