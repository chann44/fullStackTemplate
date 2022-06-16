import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (name: string) => {
  const newUSer = await prisma.user.create({
    data: {
      name: name,
    },
  });

  console.log(newUSer);
};

createUser("vikash");
