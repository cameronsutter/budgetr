import React from 'react'
import '../styles/Calendar.scss'

export default class Calendar extends React.Component {

  renderDays () {
    let days = []
    for (let i = 1; i < 32; i++) {
      let periodId = null
      let dateKlasses = this.props.periods.reduce((result, val) => {
        let active = this.props.activeId == val.id ? "active" : ""
        if (val.start < i && val.end > i) {
          periodId = val.id
          return `calendar-date calendar-range ${active}`
        }
        if (val.start == i) {
          periodId = val.id
          return `calendar-date calendar-range range-start ${active}`
        }
        if (val.end == i) {
          periodId = val.id
          return `calendar-date calendar-range range-end ${active}`
        }
        return result
      }, "calendar-date")

      let day = <div key={i} className={dateKlasses} onClick={() => this.props.setActive(periodId)}>
        <button className="date-item">{i}</button>
      </div>
      days.push(day)
    }
    for (let i = 0; i < 4; i++) {
      days.push(<div key={`fake-${i}`} className="calendar-date"></div>)
    }
    return days
  }

  render () {
    return <div className="calendar">
      <div className="calendar-container">
        <div className="calendar-header">
          <div className="calendar-date">Sun</div>
          <div className="calendar-date">Mon</div>
          <div className="calendar-date">Tue</div>
          <div className="calendar-date">Wed</div>
          <div className="calendar-date">Thu</div>
          <div className="calendar-date">Fri</div>
          <div className="calendar-date">Sat</div>
        </div>
    
        <div className="calendar-body">
          { this.renderDays() }
        </div>
      </div>
    </div>
  }
}