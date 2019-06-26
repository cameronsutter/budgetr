import React from 'react'
import Icon from './components/icon'
import './styles/App.scss'
import Homepage from './components/homepage'
import BudgetTemplate from './components/budget_template'
import SavingsBuckets from './components/savings_buckets'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase, uiConfig, storageRef, budgetRef } from './util/firebase'
import axios from 'axios';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false, 
      page: '/', 
      isSignedIn: false, 
      userId: null,
      budgetData: null
    }
  }

  async componentDidMount() {
    // Listen to the Firebase Auth state and set the local state.
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user, userId: user.uid})

      // download the user's data
      budgetRef(user.uid).getDownloadURL().then(async url => {
        let resp = await axios.get(url)
        this.setState({budgetData: resp.data})
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

// export default function App() {
//   let initialState = defaultVars
//   if (localStorage.getItem(KEY)) initialState = JSON.parse(localStorage.getItem(KEY))
//   const [vals, setVals] = useState(initialState)
//   const [hidden, setHidden] = useState(true)

//   const [colorPalette, publishColorPalette] = useState()
//   const [textPalette, publishTextPalette] = useState()
//   const [spacingPalette, publishSpacingPalette] = useState()

//   useEffect(() => {
//     document.body.style.color = vals[FIRST_NEUTRAL]
//   }, [vals])

//   useEffect(() => {
//     localStorage.setItem(KEY, JSON.stringify(vals))
//   }, [vals])

//   function download () {
//     setHidden(false)
//     let el = document.getElementById('forPrint')
//     let printer = html2pdf().from(el)
//     printer.set(printOptions())
//     printer.save('project_palette.pdf')
//     setTimeout(() => setHidden(true), 500)
//   }

//   function setValues (values) {
//     let newValues = Object.keys(vals).reduce((acc, v) => {
//       acc[v] = values[v] || vals[v]
//       return acc
//     }, {})
//     setVals(newValues)
//   }

//   return (
//     <CustomProperties properties={vals}>
      
//     </CustomProperties>
//   )
// }
