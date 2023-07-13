import Navbar from "./Navbar";
import backgroundImage2 from "../assets/bg-copy.png";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  ownerName: z
    .string({
      required_error: "The name of the owner cannot be empty.",
      invalid_type_error: "Please enter a valid name.",
    })
    .min(1, { message: "The name of the owner cannot be empty." }),

  fullAddress: z
    .string({
      required_error: "The address of the owner cannot be empty.",
      invalid_type_error: "Please enter a valid address.",
    })
    .min(1, { message: "The address of the owner cannot be empty." }),

  city: z
    .string({
      required_error: "The city cannot be empty.",
      invalid_type_error: "Please enter a valid city.",
    })
    .min(1, { message: "The city field cannot be empty." }),

  state: z
    .string({
      required_error: "The state cannot be empty.",
      invalid_type_error: "Please enter a valid state.",
    })
    .min(1, { message: "The state field cannot be empty." }),

  pinCode: z
    .number({
      required_error: "The pincode cannot be empty.",
      invalid_type_error: "Please enter a valid pincode.",
    })
    .min(6, { message: "Please enter the valid pincode." }),

  DOB: z.date({
    required_error: "The date of birth of the user cannot be empty.",
    invalid_type_error: "Please enter a valid date.",
  }),

  contactNumber: z
    .number({
      required_error: "The contact number of the user cannot be empty.",
      invalid_type_error: "Please enter a valid number.",
    })
    .min(10, { message: "Please enter the valid number." }),

  licenseNumber: z
    .string({
      required_error: "The license number of the vehicle cannot be empty.",
      invalid_type_error: "Please enter a valid license number.",
    })
    .min(10, { message: "Please enter the valid license number." }),

  registrationDate: z.date({
    required_error: "The registration date of the user cannot be empty.",
    invalid_type_error: "Please enter a valid date.",
  }),

  engineNumber: z.string(),

  chasisNumber: z.string(),

  color: z.string(),

  seatingCapacity: z.number({
    invalid_type_error: "Please enter a valid number.",
  }),
});

const onInvalid = (err: FieldErrors) => {
  console.log(err);
};

export type FormData = z.infer<typeof FormSchema>;

const AddVehicle = () => {
  const [userId, setUserId] = useState("");
  const [parkingSpot, setParkingSpot] = useState("");
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(FormSchema) });

  const onSubmit = async (data: FieldValues) => {
    const {
      ownerName,
      contactNumber,
      DOB,
      fullAddress,
      city,
      state,
      pinCode,
      licenseNumber,
      engineNumber,
      chasisNumber,
      registrationDate,
      color,
      seatingCapacity,
    } = data;

    axios
      .post("http://localhost:3000/api/owners", {
        ownerName,
        contactNumber,
        DOB,
        fullAddress,
        city,
        state,
        pinCode,
        licenseNumber,
        engineNumber,
        chasisNumber,
        registrationDate,
        color,
        seatingCapacity,
      })
      .then((res) => {
        setUserId(res.data._id);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/parkings/availableSpot")
      .then((res) => {
        setParkingSpot(res.data.parkingSpot);
        console.log("updated parkingSpot: ", parkingSpot);
      })
      .catch((err) => console.log(err));
    axios
      .put(`http://localhost:3000/api/parkings/occupy/${userId}/${parkingSpot}`)
      .then((res) => {
        console.log("parking the user vehicle: ", res);
        navigate("/parked-vehicles");
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundSize: "cover",
          // height: "100vh",
        }}
        className="pb-5"
      >
        <Navbar />

        <div className="container mt-5 p-3 border rounded bg-info bg-opacity-25">
          <form
            onSubmit={handleSubmit(
              (data) => {
                onSubmit(data);
                // reset();
              },
              (err) => {
                onInvalid(err);
              }
            )}
          >
            {/* Owner Details */}
            <div className="mb-4">
              <label htmlFor="ownerName" className="form-label h4">
                Name :
              </label>
              {errors.ownerName && (
                <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                  <p className="h6 m-0 p-0">{errors.ownerName.message}</p>
                </span>
              )}
              <input
                {...register("ownerName", {
                  required: true,
                })}
                type="text"
                id="ownerName"
                className="form-control"
              />
            </div>

            <div className="row my-4">
              <div className="col-6 pe-2">
                <label htmlFor="contactNumber" className="form-label h4">
                  Contact Number :
                </label>
                {errors.contactNumber && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.contactNumber.message}</p>
                  </span>
                )}
                <input
                  {...register("contactNumber", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="text"
                  id="contactNumber"
                  className="form-control"
                />
              </div>

              <div className="col-6 ps-2">
                <label htmlFor="DOB" className="form-label h4">
                  Date of birth :
                </label>
                {errors.DOB && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.DOB.message}</p>
                  </span>
                )}
                <input
                  {...register("DOB", {
                    required: true,
                    valueAsDate: true,
                  })}
                  type="date"
                  id="DOB"
                  className="form-control"
                />
              </div>
            </div>

            <div className="my-4">
              <label htmlFor="fullAddress" className="form-label h4">
                Full Address :
              </label>
              {errors.fullAddress && (
                <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                  <p className="h6 m-0 p-0">{errors.fullAddress.message}</p>
                </span>
              )}
              <input
                {...register("fullAddress", {
                  required: true,
                })}
                type="text"
                id="fullAddress"
                className="form-control"
              />
            </div>

            <div className="row my-4">
              <div className="col-4 pe-2">
                <label htmlFor="state" className="form-label h4">
                  State :
                </label>
                {errors.state && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.state.message}</p>
                  </span>
                )}
                <input
                  {...register("state", {
                    required: true,
                  })}
                  type="text"
                  id="state"
                  className="form-control"
                />
              </div>

              <div className="col-4 ps-2">
                <label htmlFor="city" className="form-label h4">
                  City :
                </label>
                {errors.city && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.city.message}</p>
                  </span>
                )}
                <input
                  {...register("city", {
                    required: true,
                  })}
                  type="text"
                  id="city"
                  className="form-control"
                />
              </div>

              <div className="col-4 ps-2">
                <label htmlFor="pinCode" className="form-label h4">
                  Pin Code :
                </label>
                {errors.pinCode && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.pinCode.message}</p>
                  </span>
                )}
                <input
                  {...register("pinCode", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="text"
                  id="pinCode"
                  className="form-control"
                />
              </div>
            </div>

            <hr />
            {/* Vehicle Details */}
            <div className="row my-4">
              <div className="col-6 pe-2">
                <label htmlFor="licenseNumber" className="form-label h4">
                  License Number :
                </label>
                {errors.licenseNumber && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.licenseNumber.message}</p>
                  </span>
                )}
                <input
                  {...register("licenseNumber", {
                    required: true,
                  })}
                  type="text"
                  id="licenseNumber"
                  className="form-control"
                />
              </div>

              <div className="col-6 ps-2">
                <label htmlFor="registrationDate" className="form-label h4">
                  Registration Date :
                </label>
                {errors.registrationDate && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">
                      {errors.registrationDate.message}
                    </p>
                  </span>
                )}
                <input
                  {...register("registrationDate", {
                    required: true,
                    valueAsDate: true,
                  })}
                  type="date"
                  id="registrationDate"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-6 pe-2">
                <label htmlFor="engineNumber" className="form-label h4">
                  Engine Number :
                </label>
                {errors.engineNumber && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.engineNumber.message}</p>
                  </span>
                )}
                <input
                  {...register("engineNumber", {
                    required: true,
                  })}
                  type="text"
                  id="engineNumber"
                  className="form-control"
                />
              </div>

              <div className="col-6 ps-2">
                <label htmlFor="chasisNumber" className="form-label h4">
                  Chasis Number :
                </label>
                {errors.chasisNumber && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.chasisNumber.message}</p>
                  </span>
                )}
                <input
                  {...register("chasisNumber", {
                    required: true,
                  })}
                  type="text"
                  id="chasisNumber"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row my-4">
              <div className="col-6 pe-2">
                <label htmlFor="color" className="form-label h4">
                  Color :
                </label>
                {errors.color && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">{errors.color.message}</p>
                  </span>
                )}
                <input
                  {...register("color")}
                  type="text"
                  id="color"
                  className="form-control"
                />
              </div>

              <div className="col-6 ps-2">
                <label htmlFor="seatingCapacity" className="form-label h4">
                  Seating Capacity :
                </label>
                {errors.seatingCapacity && (
                  <span className="badge bg-danger bg-opacity-75 text-white ms-3">
                    <p className="h6 m-0 p-0">
                      {errors.seatingCapacity.message}
                    </p>
                  </span>
                )}
                <input
                  {...register("seatingCapacity", { valueAsNumber: true })}
                  type="text"
                  id="seatingCapacity"
                  className="form-control"
                />
              </div>
            </div>

            {/* Submit Button */}

            <div className="d-flex justify-content-evenly m-3">
              <button
                // disabled={!isValid}
                type="submit"
                className="btn btn-warning px-4 py-1"
              >
                <span className="h2">Fill Data</span>
              </button>
              <button
                // disabled={!isValid}
                type="submit"
                className="btn btn-success px-4 py-1"
              >
                <span className="h2">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;
