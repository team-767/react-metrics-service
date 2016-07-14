jest.unmock('../tealium')

import tealium from '../tealium'

describe('tealium dispatcher', () => {
  let subject

  describe('componentWillMount', () => {
    beforeEach(() => {
      window.utag_data = undefined
      subject = tealium({
        account: 'test',
        profile: 'first',
        env: 'prod',
        utag_data: { is: 'bloody', but: 'unbound' },
      })
    })

    it('defines utag_data', () => {
      expect(window.utag_data).toBeUndefined()
      subject.componentWillMount()
      expect(window.utag_data).toEqual(jasmine.any(Object))
    })

    it('populates utag_data', () => {
      expect(window.utag_data).toBeUndefined()
      subject.componentWillMount()
      expect(window.utag_data).toEqual({ is: 'bloody', but: 'unbound' })
    })
  })

  describe('componentDidMount', () => {
    beforeEach(() => {
      subject = tealium({
        account: 'test',
        profile: 'first',
        env: 'prod',
        utag_data: { is: 'bloody', but: 'unbound' },
      })
    })
    it('returns an object', () => {
      expect(subject).toBeTruthy()
      expect(subject).toEqual(jasmine.any(Object))
    })
    it('injects a script tag into head', () => {
      expect(document.head.innerHTML).toBeFalsy()
      subject.componentDidMount()
      expect(document.head.innerHTML).toBeTruthy()
      expect(document.head.innerHTML).toContain('/utag.js')
    })
  })
})
