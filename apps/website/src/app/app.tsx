import {Route, Routes } from 'react-router-dom'
import { Components } from '@grace-website/components';
import { Popover } from '@grace-website/components';

import HomePage from './HomePage'
import ResumePage from './ResumePage'
import NavBar from './NavBar'
import AboutMePage from './AboutMePage'
import BlogPage from './BlogPage'
import YouTubePage from './YouTubePage'
import DancerPage from './DancerPage'

export function App() {
  return (
    <div>
      <NavBar />
      <Components />
      <Popover />
      <Routes>
        <Route path="/" element={<HomePage title="home" />}></Route>
        <Route path="/resume" element={<ResumePage title="resume" />}></Route>
        <Route path="/about-me" element={<AboutMePage title="about-me" />}></Route>
        <Route path="/blog" element={<BlogPage title="blog" />}></Route>
        <Route path="/youtube" element={<YouTubePage title="youtube" />}></Route>
        <Route path="/dancer" element={<DancerPage title="dancer" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
