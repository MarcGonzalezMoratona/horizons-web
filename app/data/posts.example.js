export const posts = [
  {
    // Unique identifier for the post
    id: 1,
    // Title of the post
    title: 'Axolotl project: the development starts',
    // Subtitle of the post
    subtitle: 'Horizons Team begins development of Axolotl Project',
    // Image file name for the post preview
    caption: 'smash.jpg', // [OPTIONAL]
    // Alternate text for the image file
    alt: 'smash bros', // [OPTIONAL]
    // Image file of the author's profile image
    profile: 'MarcGonzalez.jpg',
    // Author's profile image file name
    author: 'Marc González',
    // Date when the post was published
    date: '14/03/2023',
    // An array of objects that contain the media assets for each paragraph in the post
    paragraphs: [
      {
        // URL of a video that should be embedded with the paragraph
        // Supported video types: YouTube, Vimeo, Dailymotion,
        // and other video hosting services that support embeddable iframes.
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // [OPTIONAL]
        // Name of a document file that can be downloaded
        document: 'GVD.pdf', // [OPTIONAL]
        // Text of the call-to-action (CTA) for the document download link
        documentCTA: 'Download GVD', // [OPTIONAL]
      },
    ],
  },
];
