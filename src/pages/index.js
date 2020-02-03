import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Sticky from 'react-sticky-el';
import Fullscreen from "react-full-screen";

import GlobalFonts from '../fonts/fonts';
import Header from '../components/header/Header';
import Polybe from '../components/tabs/Polybe';
import Playfair from '../components/tabs/Playfair';
import Locks from '../components/tabs/Locks';
import './index.css'


class IndexPage extends Component {
  constructor(props) {
    super();
 
    this.state = {
      isFull: false,
    };
  }

  goFull = () => {
    this.setState({ isFull: true });
  };
 
  render() {
    return (
      <div>
        <GlobalFonts />
        <button onClick={this.goFull}>
          Go Fullscreen
        </button>

        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
            <Sticky>
              <Header></Header>
          </Sticky>
          <Tabs>
            <TabList className="tabs">
              <Tab className="tab" selectedClassName="active_tab">Chiffre de Polybe</Tab>
              <Tab className="tab" selectedClassName="active_tab">Chiffre de Playfair</Tab>
              <Tab className="tab" selectedClassName="active_tab">Cadenas</Tab>
            </TabList>

            <TabPanel>
              <Polybe></Polybe>
            </TabPanel>

            <TabPanel>
              <Playfair></Playfair>
            </TabPanel>

            <TabPanel>
              <Locks></Locks>
            </TabPanel>
          </Tabs>
      </Fullscreen>
      </div>
    )
  }
}

export default IndexPage
