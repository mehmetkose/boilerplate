import { h, Component } from 'preact';
import {route} from 'preact-router'
import { Header, Title} from 'preact-photon';


export default class Default extends Component {
  render(){
    return(
      <div class="index_page">
        <div class="drag" style="height: 2em"></div>
        <div class="wrapper">

          <section class="action">
            <h1>Hello.</h1>
            <p>Lorem ipsum sit dolor amet.</p>
            <form>
              <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password" />
              </div>
              <div class="form-actions">
                <button type="submit" class="btn btn-form btn-primary">OK</button>
                <a href="/dashboard" class="btn btn-form btn-default">Dashboard</a>
              </div>
            </form>
          </section>
          <section>
          </section>
        </div>
      </div>
  )
 }
}
