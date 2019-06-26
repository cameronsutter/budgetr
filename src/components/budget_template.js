import React from 'react'
import Icon from './icon'
import MoneyList from './money_list'
import Calendar from './calendar'
import '../styles/BudgetTemplate.scss'

const buckets1 = [
  {id: 1, name: 'Tithing', amount: 137 },
  {id: 4, name: 'Internet', amount: 137 },
  {id: 6, name: 'Savings', amount: 0 },
  {id: 8, name: 'Allowance', amount: 37 },
  {id: 9, name: 'Gas', amount: 237 },
  {id: 10, name: 'Unexpected', amount: 150 },
]

const buckets2 = [
  {id: 1, name: 'Tithing', amount: 137 },
  {id: 2, name: 'Mortgage', amount: 2537 },
  {id: 3, name: 'Utilities', amount: 437 },
  {id: 5, name: 'Insurance', amount: 137 },
  {id: 7, name: 'Invest', amount: 337 },
  {id: 10, name: 'Unexpected', amount: 150 },
]

const income1 = [
  { id: 1, name: 'paycheck 15th', amount: 3000 },
]
const income2 = [
  { id: 2, name: 'paycheck 30th', amount: 3000 },
]

const expenses1 = [
  { id: 2, name: 'internet', amount: 2537, bucketId: 4 },
  { id: 3, name: 'phone', amount: 12, bucketId: 4 },
]
const expenses2 = [
  { id: 1, name: 'car insurance', amount: 15, bucketId: 5 },
]

const payPeriodTemplates = [
  { id: 1, start: 1, end: 15, income: income1, expenses: expenses1, buckets: buckets1 },
  { id: 2, start: 16, end: 31, income: income2, expenses: expenses2, buckets: buckets2 },
]

export default class BudgetTemplate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {view: 1}
  }

  calculateBuckets (period) {
    let balance = period.income.reduce((acc, inc) => {
      acc += inc.amount
      return acc
    }, 0)
    let expenseBucketIds = period.expenses.map(exp => exp.bucketId)
    let buckets = period.buckets.map(b => {
      let bucket = {...b}
      if (expenseBucketIds.includes(b.id)) {
        let total = period.expenses.reduce((acc, exp) => {
          acc += exp.amount
          return acc
        }, 0)
        bucket.amount -= total
        balance -= total
      } else {
        balance -= b.amount
      }
      return bucket
    })

    return [...buckets, { id: -1, name: 'UnBudgeted', amount: balance, highlight: true, calculated: true }]
  }

  calculateIncome (income) {
    let total = income.reduce((acc, inc) => {
      acc += inc.amount
      return acc
    }, 0)

    return [...income, {id: -1, name: 'Total', amount: total, highlight: true, calculated: true}]
  }

  renderPayPeriodTabs () {
    return payPeriodTemplates.map(t => {
      let klassName = t.id == this.state.view ? "active" : ""
      return <li key={t.id} className="tab-item">
        <a className={klassName} onClick={() => this.setState({view: t.id})}>{t.start}-{t.end}</a>
      </li>
    })
  }

  render () {
    let period = payPeriodTemplates.find(t => t.id == this.state.view)
    return <div className="budget-template">
      <h1>Budget Template</h1>
      <div className="budget-template__calendar mb-5">
        <Calendar periods={payPeriodTemplates} activeId={this.state.view} setActive={(id) => this.setState({view: id})}/>
      </div>
      <h2>Pay Periods</h2>
      <ul className="tab tab-block">
        { this.renderPayPeriodTabs() }
      </ul>
      <div className="budget-template__income mb-5">
        <h2>Income
          <button className="btn btn-action btn-sm btn-success-outline ml-2"><Icon icon='add' style={{width: '20px', verticalAlign: 'middle'}}/></button>
        </h2>
        <MoneyList items={this.calculateIncome(period.income)} edit={true}/>
      </div>
      <div className="budget-template__income mb-5">
        <h2>Expenses
          <button className="btn btn-action btn-sm btn-primary ml-2"><Icon icon='add' style={{width: '20px', verticalAlign: 'middle'}}/></button>
        </h2>
        <MoneyList items={period.expenses} edit={true} nameMap={period.buckets} nameAttr={'bucketId'}/>
      </div>
      <div className="budget-template__buckets mb-5">
        <h2>Buckets 
          <button className="btn btn-action btn-sm btn-success-outline ml-2"><Icon icon='add' style={{width: '20px', verticalAlign: 'middle'}}/></button>
        </h2>
        <MoneyList items={this.calculateBuckets(period)} edit={true}/>
      </div>
    </div>
  }
}