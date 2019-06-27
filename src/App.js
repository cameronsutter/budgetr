import React from 'react'
import Icon from './components/icon'
import './styles/App.scss'
import Homepage from './components/homepage'
import BudgetTemplate from './components/budget_template'
import SavingsBuckets from './components/savings_buckets'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase, uiConfig, downloadBudgetData } from './util/firebase'
import { create, setIds } from './store/create'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false, 
      page: '/', 
      isSignedIn: false,
      userId: null,
      store: null,
    }
  }

  componentDidMount() {
    // Listen to the Firebase Auth state and set the local state.
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user, userId: user.uid})

      downloadBudgetData(user.uid, (data) => {
        setIds(data.entities)
        this.setState({store: create(data)})
      })
    })
  }
  
  componentWillUnmount() {
    // Make sure we un-register Firebase observers when the component unmounts.
    this.unregisterAuthObserver()
  }

  toggleSideBar = () => {
    this.setState({showSidebar: !this.state.showSidebar})
  }

  renderBody () {
    if (this.state.isSignedIn) {      
      switch (this.state.page) {
        case 'budget_template':
          return <BudgetTemplate/>
        case 'savings_buckets':
          return <SavingsBuckets/>
        case 'homepage':
        case '/':
        default:
          return <Homepage navigate={this.switchPage}/>
      }
    } else {
      return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    }
  }

  switchPage = (page) => {
    this.setState({page: page})
  }

  render () {
    let sidebarClass = this.state.showSidebar ? 'off-canvas-sidebar' : 'd-hide'
    return <div className="main">
      <div className="header mb-2 p-sticky">
        <a onClick={this.toggleSideBar} className="btn btn-action">
          <Icon icon='menu'/>
        </a>
        <div className="pl-2 pt-2">
          <a onClick={() => this.setState({page: 'homepage'})}>
            { this.state.isSignedIn && <span className="black-text"><Icon icon='logo'/> Budgetr</span> }
          </a>
        </div>
      </div>
      <div className="content">
        { this.renderBody() }
      </div>
    </div>
  }
}

