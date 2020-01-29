import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Sticky from 'react-sticky-el';

import GlobalFonts from '../fonts/fonts';
import Header from '../components/header/Header';
import Polybe from '../components/tabs/Polybe';
import Playfair from '../components/tabs/Playfair';
import Locks from '../components/tabs/Locks';
import './index.css'


const IndexPage = () => (
  <div>
    <GlobalFonts />
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
  </div>
)

export default IndexPage
