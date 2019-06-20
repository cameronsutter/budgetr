import React from 'react'
import CurrentPayPeriod from './current_pay_period'

export default class Homepage extends React.Component {
  render () {
    return <div className="container">
      <div className="default-action-buttons columns">
        <div className="column col-6 text-center">
          <button className="btn btn-lg btn-primary">Add<br/>Expense</button>
        </div>
        <div className="column col-6 text-center">
          <button className="btn btn-lg btn-secondary">Make<br/>Transfer</button>
        </div>
      </div>
      <div className="default-action-buttons columns">
        <div className="column col-6 text-center">
          <button className="btn btn-lg btn-success-outline">Save to<br/>Buckets</button>
        </div>
        <div className="column col-6 text-center">
          <button onClick={() => this.props.navigate('budget_template')} className="btn btn-lg btn-warning-4">
            Budget<br/>Template
          </button>
        </div>
      </div>
      <CurrentPayPeriod/>
    </div>
  }
}