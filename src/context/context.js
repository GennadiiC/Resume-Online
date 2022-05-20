import React from 'react';

export const ResumeContext = React.createContext();

export const Provider = (props) => {
  const apps = [
    {
      path: 'https://github.com/GennadiiC/Library-App',
      name: 'Library App',
      img:  '/IMG/project-1.jpg',
      desc: `simple application for library administrators, helpful in managing
             books, patrons, due dates etc. on plain JS`
    },
    {
      path: 'https://github.com/GennadiiC/Fetch-Request',
      name: 'Fetch Request',
      img:  '/IMG/project-2.jpg',
      desc: `simple application on plain JS, fetching and manipulating data
             about dog breeds (Dogs API)`
    },
    {
      path: 'https://github.com/GennadiiC/Promises',
      name: 'Promises',
      img:  '/IMG/project-3.jpg',
      desc: `another one on plain JS, practicing promises and fetch. This one is
             manipulating data from Wikipedia API displaying astronauts who are currently in
             space`
    },
    {
      path: 'https://github.com/GennadiiC/Scoreboard-App',
      name: 'Scoreboard',
      img:  '/IMG/project-4.jpg',
      desc: `this one is on React JS, a scoreboard app for tracking game score
             with possibilities like to add/remove player, player's score display,
             stopwatch`
    },
    {
      path: 'https://github.com/GennadiiC/Gif-Search',
      name: 'Gif-Search',
      img:  '/IMG/project-5.jpg',
      desc: `this one is on React JS, a gif searching app with react hooks like
             useEffect. I was using Giphy API database`
    },
    {
      path: 'https://github.com/GennadiiC/Todo-List',
      name: 'Todo-List',
      img:  '/IMG/project-7.png',
      desc: `classic must have app for React JS trainee, first created with class
             components, later transformed into functions with hooks`
    }
  ];

  const names = [
    ['HTML', 'CSS', 'JavaScript'],
    ['English', 'Ukrainian', 'Russian', 'Spanish', 'Portuguese']
  ];



  const experience = [
    {
      time: 'February 2020 – October 2021',
      position: 'React JS Frontend developer',
      company: 'Talking Swords Data-Media Agency, Kyiv, Ukraine',
      desc: `My responsibilities included: developing of UI components,
             maintaining of existing UI components,
             developing a codebase.
             Tools and technologies: JavaScript, ES5/ES6, React JS, HTML5, CSS3.`
    },
    {
      time: 'August 2019 – January 2020',
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      desc: `During this period I developed web apps for random clients.`
    },
    {
      time: 'September 2018 – July 2019',
      position: 'Digital Marketing and BPO sales manager',
      company: 'Blessed Tech LDA, Lisbon, PT',
      desc: `My responsibilities included creating new packages 
             of individual marketing services, implementing them 
             into work as well as maintenance shaping and selling 
             of existing packages to the clients.`
    },
    {
      time: 'December 2017 – August 2018',
      position: 'Digital Marketing and BPO Sales Manager',
      company: 'GWU Technologies, Barcelona, Spain',
      desc: `My responsibilities included selecting and selling
             packages of individual marketing services
             to clients.`
    },
    {
      time: 'May 2015 – December 2017',
      position: 'Digital Marketing solutions sales manager',
      company: 'BSD Trade Services Corp., Clark, Philippines',
      desc: `My responsibilities included working with existing 
             clients of the company, identifying their needs, 
             as well as selecting and selling marketing solutions 
             for their businesses.`
    }
  ];

  const courses = [
    {
      name: 'Treehouse Academy',
      link: 'https://teamtreehouse.com',
      desc: 'Front‐End Development and Learn React Courses.'
    },
    {
      name: 'Codeacademy',
      link: 'https://www.codecademy.com',
      desc: 'React JS course.'
    }
  ];

  const education = {
    grade: 'Associate of Arts',
    uni: 'Kharkiv State Academy of Culture, Kharkiv, Ukraine',
    spec: 'Specialization ‐ folk art, in absentia.',
    time: '2003 - 2008'
  };


  return (

    <ResumeContext.Provider value={{
      apps,
      names,
      experience,
      courses,
      education
    }}>
      { props.children }
    </ResumeContext.Provider>
  );
}
