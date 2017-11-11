import sinon from 'sinon'
import expect from 'expect'
import prevent from './prevent'

describe('prevent', () => {
  const eventMock = {
    preventDefault: sinon.spy(),
    stopPropagation: sinon.spy(),
  }

  it('should not return anything', () => {
    expect(typeof prevent()).toEqual('undefined')
  })

  it('should prevent default event action', () => {
    prevent(eventMock)
    expect(eventMock.preventDefault.called).toEqual(true)
  })

  it('should cancel bubbling', () => {
    prevent(eventMock)
    expect(eventMock.stopPropagation.called).toEqual(true)
  })
})