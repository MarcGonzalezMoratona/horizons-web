export const posts = [
  {
    id: 1,
    title: 'Axolotl project: the development starts',
    subtitle: `Horizons team started the development of their game's first delivery this March 14th`,
    profile: 'MarcGonzalez.jpg',
    author: 'Marc González',
    date: '14/03/2023',
    paragraphs: [
      {
        heading: 'The project comes up to life',
        content:
          `Everything started in October 2022, when a group of 24 students met each other at the UPC School 
          in the first Master's Degree in Advanced Programming for AAA videogames class.
          Since then, we have learned a lot about 3D modelling, C++ programming, texturing, game design
          and we have acquired a lot of new skills. A lot of things have been going on and now it's time 
          to start applying knowledge to the real project.`,
        },
        {
          heading: 'The first vertical slice',
          content:
          `The first vertical slice is an exercise that will lay the foundations of the final project structure.
          For the last weeks, the team has been working hard in the concept discovery milestone to define the concept art, 
          the lore and the development of the core functionality of Axolotl Engine. The main goal of this delivery is to
          have a playable prototype that presents the core gameplay and the skeleton of the application.`,
          image: '../horizons.svg',
        },
        {
          heading: 'Team methodology',
          content:
          `In order to achieve this and the following milestones, we have divided the group into several teams:
          Art, Engine, Game Design, Level Design, User Interface, Public Relations, Graphics and Physics. Each team has a lead that coordinates
          the tasks that have to be done for each milestone. Everyone in the group can change their roles from one milestone to another.
          If you want to know more about us, you can follow us in our social networks.`,
      },
    ],
  },
  {
    id: 2,
    title: 'The GVD is ready!',
    subtitle: 'Horizons team publishes the game vision document of their game',
    profile: 'MarcGonzalez.jpg',
    alt: 'computer',
    author: 'Marc González',
    date: '14/03/2023',
    paragraphs: [
      {
        heading: '',
        content:
          ``,
          document: "VS1.pdf",
          documentCTA: "Download GVD"
    },
    ],
  },
];
