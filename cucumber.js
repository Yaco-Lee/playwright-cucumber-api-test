module.exports = {
    default: {
        require: ['./features/step_definitions/*.js'],
      format: ['progress', "html:reports/cucumber-report.html"],
      paths: ['./features/**/*.feature'],
      formatOptions: {
        snippetInterface: "async-await"
      }
    }
  };