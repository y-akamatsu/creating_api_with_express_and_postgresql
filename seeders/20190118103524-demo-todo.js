'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const demoTodos = [1, 2, 3, 4,].map(num => {
      return {
        title: `デモタイトル ${num}`,
        body: `やることリスト ${num}`,
        completed: false
      };
    });
    return queryInterface.bulkInsert("Todos", demoTodos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  }
};
