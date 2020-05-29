// import {branch, renderComponent} from 'recompose'
// import React from 'react'
//
// const Loader = () => <p>Loaaad</p>

// const promiseState = (promise, callback) => {
//   // Symbols and RegExps are never content-equal
//   const uniqueValue = window.Symbol ? Symbol('unique') : /unique/
//
//   function notifyPendingOrResolved(value) {
//     if (value === uniqueValue) {
//       return callback('pending')
//     }
//
//     return callback('fulfilled')
//   }
//
//   function notifyRejected(reason) {
//     return callback('rejected')
//   }
//
//   const race = [promise, Promise.resolve(uniqueValue)]
//
//   Promise.race(race).then(notifyPendingOrResolved, notifyRejected)
// }

// const renderWhileLoading = (propName = 'data') => {
//   return branch((props) => {
//     return props.data.then((res) => {
//       console.log('passe')
//
//       return false
//     })
//
//     return true
//   }, renderComponent(Loader))
// }

// export default renderWhileLoading
