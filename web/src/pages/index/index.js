import { h, Component } from 'preact';
import {route} from 'preact-router'

import { Header, Title, Footer, Button, ButtonGroup, NavGroup, Table } from 'preact-photon';

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
        { files.map( file => <FileListItem {...file} /> ) }
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
