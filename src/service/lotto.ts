import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

import gql from 'graphql-tag'

const query = gql`query{
  draw(type: "eurojackpot"){
    backendError
    draws {
      additionalNumbers
      date
      gameAmount
      jackpot
      megaPlier
      numbers
      odds {
        link
        numberOfWinners
        numbers
        odd
        winningClass
        withOptions
      }
      powerPlay
      seo {
        description
        texts {
          content
          headline
        }
        title
      }
      shares
      time
      video
    }
    success
    visibleErrors {
      idents
      messages
    }
  }
}`

function getLottoNumbers() {
  return fetch('http://www.lottohelden.de/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({query: `query{
      draw(type: "eurojackpot"){
        backendError
        draws {
          additionalNumbers
          date
          gameAmount
          jackpot
          megaPlier
          numbers
          odds {
            link
            numberOfWinners
            numbers
            odd
            winningClass
            withOptions
          }
          powerPlay
          seo {
            description
            texts {
              content
              headline
            }
            title
          }
          shares
          time
          video
        }
        success
        visibleErrors {
          idents
          messages
        }
      }
    }`})
  })
  .then(r => r.json())
}

export { getLottoNumbers }