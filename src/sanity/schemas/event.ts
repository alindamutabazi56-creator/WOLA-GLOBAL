export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'start', type: 'datetime' },
    { name: 'end', type: 'datetime' },
    { name: 'location', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'rsvpUrl', type: 'url' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'isFeatured', type: 'boolean' },
    { name: 'chapterRef', type: 'reference', to: [{ type: 'chapter' }] }
  ]
};
