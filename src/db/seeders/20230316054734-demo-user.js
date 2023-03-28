'use strict'
const { v4: uuid } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Users', [
      {
        id: uuid(),
        username: 'admin',
        password: '123456',
        email: 'hoanglong@gmail.com',
        avatar: 'images',
        firstName: 'hoang',
        lastName: 'long',
        address: 'hai duong',
        phone: '0123456789',
        gender: 'M',
        position: 'P0',
        role: 'R1',
        refreshToken: "xxxxxxxxxxxxxxxxx",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
