import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

async function main() { 
    await prisma.teacher.deleteMany({where:{}})
    const teacher = (): any => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        password: '123456',
        hourlyRate: faker.number.int(30),
        isPopular: faker.datatype.boolean(),
        description: faker.lorem.words(3),
      
      });
     
      for (let i = 0; i < 10; i++) {
        await prisma.teacher.create({ data: teacher() });
      }
    
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });