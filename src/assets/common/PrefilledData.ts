const preloadedData = {
  ownerName: "Ashutoshsingh Jitendrasingh Pardeshi",
  fullAddress:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  city: "Pune",
  state: "Maharashtra",
  pinCode: 411048,
  DOB: new Date(),
  contactNumber: 9876543201,
  registrationDate: new Date(),
  engineNumber: randomText(6),
  chasisNumber: randomText(14),
  color: randomColor(),
  seatingCapacity: Math.floor(Math.random() * 4 + 4),
};

function randomText(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function randomColor() {
  const colors = [
    "White",
    "Black",
    "Blue",
    "Red",
    "Grey",
    "Yellow",
    "Orange",
    "",
  ];
  return colors[Math.floor(Math.random() * 7)];
}

export default preloadedData;
