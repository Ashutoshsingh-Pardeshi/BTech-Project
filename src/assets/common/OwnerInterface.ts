export interface OwnerSchema {
  _id: String;
  ownerName: String;
  contactNumber: Number;
  DOB: Date;
  fullAddress: String;
  city: String;
  state: String;
  pinCode: Number;
  vehicle: {
    licenseNumber: String;
    engineNumber: String;
    chasisNumber: String;
    registrationDate: Date;
    color: String;
    seatingCapacity: Number;
  };
  parkingDetails: {
    parkedSpot: String;
    checkIn: Date;
  };
}
