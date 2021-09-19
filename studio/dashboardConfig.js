export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61475c832bf54e209c9263f4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ohc7wpcu',
                  apiId: '8f4d472f-3664-461d-ae35-049fc134e883'
                },
                {
                  buildHookId: '61475c841d7f095619fc9a2c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-keqjqwt3',
                  apiId: '03f173ee-db3c-420d-9083-f6c700117bc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thaisonnguyenbt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-keqjqwt3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
