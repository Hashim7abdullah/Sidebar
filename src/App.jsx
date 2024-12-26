import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import styled from 'styled-components';

// Main container to wrap sidebar and main content
const MainLayout = styled.div`
  display: flex;
`;

// Content area that adjusts based on sidebar's width
const Content = styled.div`
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '100px' : '200px')};
  transition: margin-left 0.3s ease;
  flex-grow: 1; 
`;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <MainLayout>
      <Sidebar isCollapsed={isCollapsed} />
      <div >
        <Header isCollapsed={isCollapsed}
        toggleSidebar={toggleSidebar} />
      </div>
    </MainLayout>
  );
};

export default App;
