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
                  buildHookId: '5f8a54f7343767b7e972553f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v7wtdic7',
                  apiId: '7a9877a9-9c53-4cec-a7c6-001fedf8216e'
                },
                {
                  buildHookId: '5f8a54f710b6b2affd0a5021',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g3yehj97',
                  apiId: '82a8f8aa-5b2e-4b4a-8fd3-9bc2972bc822'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pettreegnat/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g3yehj97.netlify.app', category: 'apps'}
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
