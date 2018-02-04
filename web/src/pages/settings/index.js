import { h, Component } from 'preact';
import {route} from 'preact-router'

import { Header, Title, Footer, Button, ButtonGroup, NavGroup, Table } from 'preact-photon';

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
        					Settings
        				</div>
      			</div>
          </div>

          <Footer>
            <Title>
      			   Settings
            </Title>
          </Footer>
      </div>
  )
 }
}
