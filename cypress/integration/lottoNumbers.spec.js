import TestIds from '../../src/consts/TestIds'

import { TestIdSelector as s, GoTo } from '../utils'

describe('Lotto Numbers', () => {
  it('we have six numbers', () => {
    GoTo('LottoNumbers')
    const isNumberRegexp = new RegExp('^\\d+$')
    cy.get(s(TestIds.LottoNumbers.number)).each(($el) => {
      expect($el).contains(isNumberRegexp)
    })
  })
})
