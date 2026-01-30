import type { Author } from '~/types'

const authors: Record<string, Author> = {
  // Add authors here. The key is used to reference the author in post frontmatter.
  // Example:
  // 'john-doe': {
  //   name: 'John Doe',
  //   avatar: '/images/authors/john-doe.webp',
  //   bio: 'John is a software engineer who loves writing about web development.',
  //   socialLinks: {
  //     github: 'https://github.com/johndoe',
  //     matrix: 'https://matrix.to/#/@johndoe:matrix.org',
  //     email: 'john@example.com',
  //   },
  // },
  pacey: {
    name: 'Florian // pacey',
    avatar: '/images/authors/pacey.png',
    bio: 'Cloud-Architect bei Tag, Rollenspieler bei Nacht. Interessiert sich für alles mit Computern.<br /><br />Manche sagen, datenba.ch war seine doofe Idee',
    socialLinks: {
      github: 'https://github.com/johndoe',
      matrix: 'https://matrix.to/#/@johndoe:matrix.org',
      email: 'john@example.com',
    },
  },
}

export default authors
