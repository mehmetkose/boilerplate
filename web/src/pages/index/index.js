import { h, Component } from 'preact';
import {route} from 'preact-router'

import { Header, Title, Footer, Button, ButtonGroup, NavGroup, Table } from 'preact-photon';
/** @jsx h */
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

let store = createStore({ count: 0 })

let actions = store => ({
  increment: ({ count }) => ({ count: count + 1 }),

  decrement: ({ count }) => ({ count: count - 1 }),

  incrementAsync(state) {
    store.setState({ count: state.count + 1 })
  },

  decrementAndLog({ count }, event) {
    console.log(event)
    return { count: count - 1 }
  }
})

export const App = connect(['count'], actions)(
  ({ count, increment, incrementAsync, decrement, decrementAndLog }) => (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Async Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementAndLog}>Decrement with Log</button>
    </div>
  )
)

const FileList = ({ files }) => (
    <Table striped>
        <thead>
            <tr>
                <th>Name</th>
                <th>Kind</th>
                <th>Date Modified</th>
                <th>Author</th>
            </tr>
        </thead>
        <tbody>
        {
      		files.map( file => <FileListItem {...file} /> )
      	}
        </tbody>
    </Table>
);

const FileListItem = ({ name, type, date, author }) => (
    <tr>
        <td>{ name }</td>
        <td>{ type }</td>
        <td>{ date }</td>
        <td>{ author }</td>
    </tr>
);

const Sidebar = () => (
    <div class="pane pane-sm sidebar">
        <NavGroup>
            <NavGroup.Title>Places</NavGroup.Title>
            <NavGroup.Item icon="home">Home</NavGroup.Item>
            <NavGroup.Item icon="folder">Documents</NavGroup.Item>
            <NavGroup.Item icon="download">Downloads</NavGroup.Item>
            <NavGroup.Item icon="cloud">Desktop</NavGroup.Item>
        </NavGroup>
    </div>
);

const FILES = [
    { name:'index.html', type:'HTML', date:'Yesterday', author:'mehmetkose' },
    { name:'bundle.js', type:'JavaScript', date:'10:01 am', author:'mehmetkose' },
    { name:'photon.css', type:'CSS', date:'9:15 am', author:'connors' }
];

export default class Default extends Component {
  render(){
    return(
      <div class="window">
          <Header>
              <Title>Bir Mac Uygulaması</Title>
          		<div class="toolbar-actions">
          			<ButtonGroup>
          				<Button icon="left" />
          				<Button icon="right" />
      				  </ButtonGroup>
      	            <Button icon="arrows-ccw" class="pull-right" />
      	            <Button icon="home" onClick={()=>{route('/')}}>Home</Button>
                    <Button icon="cog" onClick={()=>{route('/settings')}}>Settings</Button>
          		</div>
          </Header>

          <div class="window-content">
        		<div class="pane-group">
      				  <Sidebar />
          			<div class="pane">
      					<FileList files={FILES} />
                <Provider store={store}>
                  <App />
                </Provider>
      				</div>
      			</div>
          </div>



          <Footer>
            <Title>
      			   { FILES.length + ' items' }
            </Title>
          </Footer>
      </div>
  )
 }
}
