import React from 'react'
import Icon from './icon'
import '../styles/MoneyList.scss'

export default class MoneyList extends React.Component {

  renderButtons () {
    if (!this.props.buttons) return null

    return <div className="column col-3">
      <button className="btn btn-action btn-sm btn-success-outline mr-2"><Icon icon='add' style={{width: '20px', verticalAlign: 'middle'}}/></button>
      <button className="btn btn-action btn-sm btn-primary ml-2"><Icon icon='remove' style={{width: '20px', verticalAlign: 'middle'}}/></button>
    </div>
  }

  renderAmount (item) {
    let klasses = 'money-text-lg pl-2'
    let iconStyle = {width: '20px', verticalAlign: 'text-top'}
    let amount = item.current == null ? item.amount || 0 : item.current
    let el = Number(amount).toLocaleString()
    if (this.props.edit && !item.calculated) {
      klasses = 'money-text pl-2'
      iconStyle['verticalAlign'] = 'sub'
      el = <input type="number" defaultValue={amount} size="5" className="money-input" onChange={(val) => this.props.changeValue(item.id, val)}/>
    }
    return <div key="amount" className="column col-4">
      <Icon icon='dollar-sign' style={iconStyle}/><span className={klasses}>{el}</span>
    </div>
  }

  renderMoneyListItems () {
    return this.props.items.map(item => {
      let itemName = null
      if (this.props.nameMap && this.props.nameAttr) {
        itemName = this.props.nameMap.find(m => item[this.props.nameAttr] == m.id)['name']
      } 
      let values = [this.renderAmount(item)]
      let bucketName = <div key="name" className="column col-auto col-mr-auto">{item.name}</div>
      this.props.edit ? values.unshift(bucketName) : values.push(bucketName)
      if (itemName) {
        let el = <div key={itemName} className="column col-auto col-mr-auto">({itemName})</div>
        values.splice(1, 0, el)
      }
      let itemKlasses = `bucket-list-item columns col-gapless ${item.highlight ? 'gray-border p-1 mt-1' : ''}`
      return <div key={item.name} className={itemKlasses}>
        { values }
        { this.renderButtons() }
      </div>
    })
  }

  render () {
    return <div className="bucket-list container">
      { this.renderMoneyListItems() }
    </div>
  }
}