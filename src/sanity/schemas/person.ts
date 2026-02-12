export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'bio', type: 'text' },
    { name: 'headshot', type: 'image' },
    { name: 'socials', type: 'object', fields: [{ name: 'linkedin', type: 'url' }] },
    { name: 'email', type: 'string' },
    { name: 'chapterRef', type: 'reference', to: [{ type: 'chapter' }] }
  ]
};
