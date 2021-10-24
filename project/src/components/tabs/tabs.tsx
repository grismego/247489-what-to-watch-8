import { useState } from 'react';
import { FilmNav } from '../film-nav/film-nav';

type TabsPropsType = {
  children: JSX.Element[],
};

export function Tabs({ children }: TabsPropsType): JSX.Element {

  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTabHandler = (label: string) => {
    setActiveTab(label);
  };

  return (
    <>
      <FilmNav
        labels={children.map((child) => child.props.label as string)}
        activeTab={activeTab}
        changeTabHandler={changeTabHandler}
      />
      {children.map((child) => (child.props.label === activeTab) && child)}
    </>
  );
}
