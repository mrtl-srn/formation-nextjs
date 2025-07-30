import "server-only";

export async function getFlagshipProductFromDb() {
  return new Promise<any>((resolve, reject) => {
    const flagshipProduct: any = {
      title: "My Flag Ship!",
      description:
        "A flag with a ship on it. Or a ship with a flag on it I don't remember.",
      price: 100000,
      pid: 42,
      imgUrl: "/flagship.jpg",
    };

    // On simule un délai
    setTimeout(() => {
      resolve({
        ...flagshipProduct,
      });
    }, 100);
  });
}