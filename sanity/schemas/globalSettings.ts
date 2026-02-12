export default {
  name: 'globalSettings',
  title: 'Global Settings',
  type: 'document',
  fields: [
    { name: 'taglineOptions', type: 'array', of: [{ type: 'string' }] },
    { name: 'ctas', type: 'object', fields: [{ name: 'join', type: 'string' }, { name: 'chapters', type: 'string' }] },
    { name: 'socials', type: 'object', fields: [{ name: 'instagram', type: 'url' }, { name: 'linkedin', type: 'url' }, { name: 'x', type: 'url' }] },
    { name: 'metrics', type: 'object', fields: [{ name: 'chapters', type: 'number' }, { name: 'members', type: 'number' }, { name: 'events', type: 'number' }, { name: 'fundsRaised', type: 'string' }] },
    { name: 'membershipShopURL', type: 'url' }
  ]
};
