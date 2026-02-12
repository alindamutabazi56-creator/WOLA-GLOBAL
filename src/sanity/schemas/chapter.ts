export default {
  name: 'chapter',
  title: 'Chapter',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'university', type: 'string' },
    { name: 'country', type: 'string' },
    { name: 'city', type: 'string' },
    { name: 'status', type: 'string', options: { list: ['active', 'launching'] } },
    { name: 'description', type: 'text' },
    { name: 'contacts', type: 'object', fields: [{ name: 'email', type: 'string' }] },
    { name: 'socials', type: 'object', fields: [{ name: 'instagram', type: 'url' }, { name: 'linkedin', type: 'url' }] },
    { name: 'leaders', type: 'array', of: [{ type: 'string' }] },
    { name: 'initiatives', type: 'array', of: [{ type: 'string' }] },
    { name: 'heroImage', type: 'image' }
  ]
};
