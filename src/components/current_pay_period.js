import React from 'react'
import Icon from './icon'
import MoneyList from './money_list'
import '../styles/CurrentPayPeriod.scss'

const buckets = [
  {id: 1, name: 'Tithing', current: 137, total: 7000 },
  {id: 2, name: 'Mortgage', current: 2537, total: 7000 },
  {id: 3, name: 'Utilities', current: 437, total: 7000 },
  {id: 4, name: 'Internet', current: 137, total: 7000 },
  {id: 5, name: 'Insurance', current: 137, total: 7000 },
  {id: 6, name: 'Savings', current: 0, total: 7000 },
  {id: 7, name: 'Invest', current: 337, total: 7000 },
  {id: 8, name: 'Allowance', current: 37, total: 7000 },
  {id: 9, name: 'Gas', current: 237, total: 7000 },
  {id: 10, name: 'Unexpected', current: 150, total: 7000 },
  {id: 11, name: 'Unbudgeted', current: 3, total: 7000 },
]

export default class CurrentPayPeriod extends React.Component {
  render() {
    return <div className="current-pay-period">
      <h4>Current Pay Period</h4>
      <MoneyList buttons={true} items={buckets} />
    </div>
  }
}