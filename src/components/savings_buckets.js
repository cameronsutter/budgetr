import React from 'react'
import Icon from './icon'
import MoneyList from './money_list'

// import '../styles/SavingsBuckets.scss'

const buckets = [
  {id: 1, name: 'allowance', amount: 137 },
  {id: 4, name: 'subscriptions', amount: 137 },
  {id: 6, name: 'gifts', amount: 0 },
  {id: 8, name: 'home repairs', amount: 37 },
  {id: 9, name: 'clothes', amount: 237 },
  {id: 10, name: 'car', amount: 150 },
  {id: 11, name: 'haircut', amount: 39 },
  {id: 12, name: 'Araya Business', amount: 70 },
]

export default class SavingsBuckets extends React.Component {
  render () {
    return <div className="savings-buckets">
      <h1>Savings Buckets</h1>
      <button className="btn btn-lg btn-success-outline mb-5">Save to Buckets</button>
      <MoneyList items={buckets}/>
    </div>
  }
}