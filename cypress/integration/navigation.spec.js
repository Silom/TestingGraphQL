import TestIds from '../../src/consts/TestIds'
import { TestIdSelector as s, GoTo } from '../utils'

describe('Navigate area', () => {
  it('Navigate Home', () => {
    GoTo('Home')
    cy.get(s(TestIds.Home.title))
  })

  it('Navigate Lotto', () => {
    GoTo('LottoNumbers')
    cy.get(s(TestIds.LottoNumbers.number))
  })
})
