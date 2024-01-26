import React, { createContext } from 'react'
import Projects from './components/projects';
import Header from './components/header';
import RouteTo from './components/routeTo';
import DecorativeBackground from '@/components/ui/decorativeBackground';

const Design = ({ data }: { data: DesignType }) => {

  return (
    <main>
      <Header data={data.header} />
      <DecorativeBackground className="translate-y-[-300px]" />
      <Projects data={data.projects} />
      <RouteTo data={data.routesTo} />
    </main>
  );

}

export default Design