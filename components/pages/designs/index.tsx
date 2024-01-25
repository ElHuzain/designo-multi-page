import React, { createContext } from 'react'
import Projects from './components/projects';
import Header from './components/header';
import RouteTo from './components/routeTo';

const Design = ({ data }: { data: DesignType }) => {

  return (
    <main>
      <Header data={data.header} />
      <Projects data={data.projects} />
      <RouteTo data={data.routesTo} />
    </main>
  );

}

export default Design