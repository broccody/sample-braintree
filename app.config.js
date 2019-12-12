module.exports = {
    apps: [
      {
        name: 'braintree-server',
        script: 'npm',
        args: 'run dev',
        watch: ['server', '*.js'],
        ignore_watch: ['node_modules']
      },
      {
        name: 'braintree-server-debug',
        script: 'npm',
        args: 'run debug',
        watch: ['server', '*.js'],
        ignore_watch: ['node_modules']
      }
    ]
  }
  