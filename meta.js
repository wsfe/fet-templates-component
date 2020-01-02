function CamelCase (str) {
  if (!str) return ''
  str = str.toLowerCase()
  return str.replace(/([-_]|\s|\b)+([A-Za-z0-9])/g, (str, $1, $2) => {
    return $2.toUpperCase()
  })
}

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'component name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'component description',
      default: 'A Vue.js component',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created?',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  renames: {
    'src/components/Component.vue': (fileName, options) => {
      options.componentName = CamelCase(options.name)
      return options.componentName + '.vue'
    }
  }
}
