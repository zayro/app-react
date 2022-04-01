import faker from 'faker'

const createUser = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  surname: faker.name.middleName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar()
})

const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser)

// const fakeUsers = createUsers(20)

export { createUsers }
