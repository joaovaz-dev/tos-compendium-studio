// schemas/page.js
export default {
  name: 'genericPage',
  type: 'document',
  title: 'Generic Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Seções da Página',
      of: [{type: 'textSection'}, {type: 'imageSection'}],
    },
    {
      name: 'isReady',
      type: 'boolean',
      title: 'Pronta',
      description:
        'Marque se a página está pronta para ser exibida. Se falso, mostrar estado "Em preparação". Para validar a página, utilize o parâmetro preview=true na URL.',
      initialValue: false,
    },
  ],
}
