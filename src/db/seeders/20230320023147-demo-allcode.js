'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   value: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Allcodes', [{
      type: 'ROLE',
      key: 'R1',
      value: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'ROLE',
      key: 'R2',
      value: 'DOCTOR',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'ROLE',
      key: 'R3',
      value: 'PATIENT',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'STATUS',
      key: 'S1',
      value: 'New',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'STATUS',
      key: 'S2',
      value: 'Confirmed',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'STATUS',
      key: 'S3',
      value: 'Done',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'STATUS',
      key: 'S4',
      value: 'Cancel',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T1',
      value: '8:00 - 9:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T2',
      value: '9:00 - 10:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T3',
      value: '10:00 - 11:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T4',
      value: '11:00 - 12:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T5',
      value: '13:00 - 14:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T6',
      value: '14:00 - 15:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T7',
      value: '15:00 - 16:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'TIME',
      key: 'T8',
      value: '16:00 - 17:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'POSITION',
      key: 'P0',
      value: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'POSITION',
      key: 'P1',
      value: 'Master',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'POSITION',
      key: 'P2',
      value: 'Doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'POSITION',
      key: 'P3',
      value: 'Associate Professor',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'POSITION',
      key: 'P4',
      value: 'Professor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'GENDER',
      key: 'M',
      value: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'GENDER',
      key: 'F',
      value: 'Female',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'GENDER',
      key: 'O',
      value: 'Other',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI1',
      value: '10',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI2',
      value: '15',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI3',
      value: '20',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI4',
      value: '25',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI5',
      value: '30',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI6',
      value: '35',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PRICE',
      key: 'PRI7',
      value: '40',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PAYMENT',
      key: 'PAY1',
      value: 'Cash',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PAYMENT',
      key: 'PAY2',
      value: 'Credit card',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PAYMENT',
      key: 'PAY3',
      value: 'All payment method',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO1',
      value: 'Ha Noi',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO2',
      value: 'Ho Chi Minh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO3',
      value: 'Da Nang',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO4',
      value: 'Can Tho',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO5',
      value: 'Binh Duong',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO6',
      value: 'Dong Nai',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO7',
      value: 'Quang Ninh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO8',
      value: 'Hue',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO9',
      value: 'Quang Binh',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'PROVINCE',
      key: 'PRO10',
      value: 'Khanh Hoa',
      createdAt: new Date(),
      updatedAt: new Date(),
    },], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
