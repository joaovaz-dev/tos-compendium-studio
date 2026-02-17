export default {
  name: 'imageSection',
  type: 'object',
  title: 'Seção de Imagem',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'caption',
      type: 'string',
    },
  ],
}
