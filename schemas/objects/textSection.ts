// schemas/textSection.js
export default {
  name: 'textSection',
  type: 'object',
  title: 'Seção de Texto',
  fields: [
    {
      name: 'alignment',
      type: 'string',
      title: 'Alinhamento',
      options: {
        list: [
          {title: 'Esquerda', value: 'left'},
          {title: 'Centro', value: 'center'},
          {title: 'Direita', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
    {
      name: 'content',
      type: 'portableTextWithColors',
      title: 'Conteúdo',
    },
  ],
}
