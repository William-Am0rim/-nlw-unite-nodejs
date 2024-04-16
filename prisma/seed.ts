import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "a71561d1-da70-45e7-9dac-3c54fe2ccb5d",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento p/ devs apaixonados(das) por código",
      maximumAttendees: 120,
    },
  });
}
seed().then(() => {
  console.log("Database seeded!");

  prisma.$disconnect();
});
