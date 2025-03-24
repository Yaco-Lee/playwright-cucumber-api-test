module.exports = {
    default: {
        require: ['./features/step_definitions/*.js'],
      format: ['progress', "html:reports/cucumber-report.html"],
      tags: 'not @skip',
      paths: ['./features/**/*.feature'],
      formatOptions: {
        snippetInterface: "async-await"
      }
    }
  };