export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', type: 'string', options: { list: ['Female Spotlight', 'Society Updates', 'Thought Pieces', 'Events Recaps'] } },
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    { name: 'coverImage', type: 'image' },
    { name: 'authorRef', type: 'reference', to: [{ type: 'person' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] }
  ]
};
