"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
          //clients
          firstName: "David",
          lastName: "Garcia",
          phoneNumber: "9092221234",
          country: "usa",
          email: "dgarcia@regis.edu",
          password: "$2b$10$t8xZhmAwKs1JrvOjVTJp1OodEaUfJMi1IrSwMV.vP2vedQM.d08kW",
          isLawyer: false,
          roomKey: 393314,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Richard",
          lastName: "Mozqueda",
          phoneNumber: "9518675309",
          country: "usa",
          email: "rmozqueda@regis.edu",
          password: "$2b$10$kEjLDXcLj0pbZjxfpSNKRO/sJrka4YDdi4h9b6ctuLPMLXNWWkCuK",
          isLawyer: false,
          roomKey: 832218,
          createdAt: new Date(),
          updatedAt: new Date()

        },
        {
          firstName: "Milo",
          lastName: "Ren",
          phoneNumber: "9097986666",
          country: "usa",
          email: "deathstar@space.complete",
          password: "$2b$10$t8xZhmAwKs1JrvOjVTJp1OodEaUfJMi1IrSwMV.vP2vedQM.d08kW",
          isLawyer: false,
          roomKey: 832219,
          createdAt: new Date(),
          updatedAt: new Date()

        },

        //lawyers
        {
          firstName: "Ann",
          lastName: "Sartin",
          phoneNumber: "5164486543",
          country: "usa",
          email: "annjsartin@mobile.com",
          password: "$2b$10$oShvya.cfdvhW6ST1t/TVO7VMQsOshDr60JuIhTlcGQSNn8KvMqBm",
          isLawyer: true,
          roomKey: 367796,
          profileImg: '/images/profile/6f3bcddb-4e35-4da9-b7dd-2d54fc8ce93c.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Elizabeth",
          lastName: "Kimball",
          phoneNumber: "2319034633",
          country: "usa",
          email: "elizabethkimball@rhyta.com",
          password: "$2b$10$sywtwqm4npOP7CbEmivpneqmg3B1EqmBdFlzHw0NLrYw4na2Iif9y",
          isLawyer: true,
          roomKey: 163691,
          profileImg: '/images/profile/83ab32bf-7b4b-479b-bbc8-b6d03b24d680.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Virginia",
          lastName: "Gallegos",
          phoneNumber: "5414192889",
          country: "usa",
          email: "virginiagallegos@rhyta.com",
          password: "$2b$10$p9l1OgCdC2APD1UOjs9Dw.w51vpKwr5uPF2bnHYkoFWUsGFnE45yK",
          isLawyer: true,
          roomKey: 550317,
          profileImg: '/images/profile/408239d7-8bbc-4bd2-bff9-25e189ca34b8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Carolyn",
          lastName: "Lovelace",
          phoneNumber: "7078974896",
          country: "usa",
          email: "carolynlovelace@jourrapide.com",
          password: "$2b$10$wBfzkq/Y5fyLUBkpZgxrNe8QwWwod9akkY0H3ki2niUldsHox07ay",
          isLawyer: true,
          roomKey: 313932,
          profileImg: '/images/profile/658662be-070a-44dc-8901-887bab701f51.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Bernard",
          lastName: "Wisdom",
          phoneNumber: "9255098973",
          country: "usa",
          email: "bernardwisdom@dayrep.com",
          password: "$2b$10$IwKa8pYrGy5loTCkFC6X.eIDMCH2jnV0cjmh8nWB5s7P9D8/0iOoi",
          isLawyer: true,
          roomKey: 514014,
          profileImg: '/images/profile/a00b2aac-5c82-40ac-a968-9b407d612802.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Mary",
          lastName: "Allen",
          phoneNumber: "6148304852",
          country: "usa",
          email: "maryallen@dayrep.com",
          password: "$2b$10$ScQLs8e67WCnFc5/y7.mZ.exKihRaq8DRrMcSTbdZ10FW0K3xAIUa",
          isLawyer: true,
          roomKey: 257359,
          profileImg: '/images/profile/d546db4c-6d25-4e65-936f-ddda713814a8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Emily",
          lastName: "Lewis",
          phoneNumber: "6172757668",
          country: "usa",
          email: "emilylewis@jourrapide.com",
          password: "$2b$10$5trVN5QuVOHvTm3txMYdL.XalmkqlBDQqEZ5ERBgrvSPA86kCUx52",
          profileImg: '/images/profile/decea1a8-db42-49f7-99fe-03f9c7e53b7e.jpg',
          isLawyer: true,
          roomKey: 266712,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Manuel",
          lastName: "Case",
          phoneNumber: "5024538627",
          country: "usa",
          email: "manuelcase@rhyta.com",
          password: "$2b$10$UWhNRCkb2XVA9FO9aAqeK.YAbCrt5zuUgL5L0.XXSwU5CP4G8c3Kq",
          isLawyer: true,
          roomKey: 612455,
          profileImg: '/images/profile/6a605f1e-ace6-4050-aa0e-f4dda4326230.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Jessica",
          lastName: "Lehmann",
          phoneNumber: "9725612363",
          country: "usa",
          email: "jessicalehmann@jourrapide.com",
          password: "$2b$10$WL2OPWEukB8gDVGIQhZiqur6yfjLVkz3qLjXlU4q0Va1QDlwCRaR6",
          isLawyer: true,
          roomKey: 385436,
          profileImg: '/images/profile/f0fa056a-9e3c-467b-a33a-0a6b7329840a.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Loretta",
          lastName: "Crawford",
          phoneNumber: "4062656264",
          country: "usa",
          email: "lorettacrawford@teleworm.us",
          password: "$2b$10$YtB5E4Z4hTL9IFHtwI8DKOisExCuoLALvdWT5UHBwmeG8uffqkJ5a",
          isLawyer: true,
          roomKey: 161288,
          profileImg: '/images/profile/f769188e-e1bd-4abf-955f-15710507d78e.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Byron",
          lastName: "Samaniego",
          phoneNumber: "8477297388",
          country: "usa",
          email: "byronsamaniego@jourrapide.com",
          password: "$2b$10$u0VGX7iyI1iaaUxhD75n0umzyK/P47oLdXh0FFb9EYG/Xh2qkah0C",
          isLawyer: true,
          roomKey: 958120,
          profileImg: '/images/profile/214ba6d1-fb78-4c75-b6f0-1749114cf7a0.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "James",
          lastName: "Usry",
          phoneNumber: "7042882998",
          country: "usa",
          email: "jamesusry@dayrep.com",
          password: "$2b$10$FZESUr9i/VnCCQEvbn2znOu0wMMcs1nHsVspUiiItF.LYEeQ2gsNi",
          isLawyer: true,
          roomKey: 578282,
          profileImg: '/images/profile/aa749fc0-d296-458d-80c9-f53b72a85462.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Helen",
          lastName: "Lewis",
          phoneNumber: "7184601583",
          country: "usa",
          email: "helenlewis@jourrapide.com",
          password: "$2b$10$7hU2aOl01ppgBgX4FDIjFuBBOInLdCOP8wO/Bz2Rd3SALqb1.hiFC",
          isLawyer: true,
          roomKey: 704341,
          profileImg: '/images/profile/a8c4e04e-f796-4f4e-af6d-e684a23cc8b3.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
