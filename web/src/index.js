import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import GAnalytics from 'ganalytics'
import Index from './pages/index'

import './index.scss'

export default class App extends Component {

	constructor(props){
			super(props)
			this.state = {
				updateMainState: this.updateMainState.bind(this),
			}
	}
	updateMainState(object_to_set){
			this.setState(object_to_set)
	}

	componentDidMount() {
		window.ga = new GAnalytics('UA-XXXXXXX-XX')
	}

	handleRoute = e => {
		this.currentUrl = e.url
		window.ga && ga.send('pageview', { dp: e.url })
	}

	render() {
		return (<Router onChange={ this.handleRoute }>
			<Index default path="/" {...this.state} />
		</Router>)
  }
}
