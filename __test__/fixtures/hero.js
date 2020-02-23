const faker = require('faker');
const cuid = require('cuid');

const idGenerator = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid
});

module.exports = function makeFakeHero (overrides) {
  const hero = {
    id: idGenerator.makeId(),
    name: faker.name.findName(),
    level: faker.random.number(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  return {
    ...hero,
    ...overrides
  };
};