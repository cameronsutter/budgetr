import React from 'react'
import Icon from './components/icon'
import './styles/App.scss'
import Homepage from './components/homepage'
import BudgetTemplate from './components/budget_template'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {showSidebar: false, page: '/'}
  }

  toggleSideBar = () => {
    this.setState({showSidebar: !this.state.showSidebar})
  }

  renderBody () {
    switch (this.state.page) {
      case 'budget_template':
        return <BudgetTemplate/>
      case 'homepage':
      case '/':
      default:
        return <Homepage navigate={this.switchPage}/>
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
          <span><Icon icon='logo'/> Budgetr</span>
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
