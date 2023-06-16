import images from './images';

const technologies = [
  {
    title: 'JAVA',
    tags: 'Polymorphism | Inheritance | Interfaces',
  },
  {
    title: 'BLENDER (Minimal)',
    tags: '3D-Modeling | Rendering | Rotations',
  },
  {
    title: 'Photoshop',
    tags: 'Top-down-View | Keyframes | Pixel-Editing',
  }
];

const assets = [
  {
    title: 'WEAPONS'
  },
  {
    title: "DROPS"
  },
  {
    title: 'HUD'
  }
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { technologies, assets, awards };