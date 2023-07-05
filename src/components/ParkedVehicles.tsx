const ParkedVehicles = () => {
  const data = [
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
    {
      id: 1,
      image: "png",
      licenseNumber: "ABC1234",
      entryTime: "1:00 pm",
      parkedLocation: "A9",
    },
  ];
  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr style={{ backgroundColor: "red" }}>
            <th className="bg-info-subtle" scope="col">
              Entry Id
            </th>
            <th className="bg-info-subtle" scope="col">
              Image
            </th>
            <th className="bg-info-subtle" scope="col">
              License Number
            </th>
            <th className="bg-info-subtle" scope="col">
              Entry Time
            </th>
            <th className="bg-info-subtle" scope="col">
              Parked Location
            </th>
            <th className="bg-info-subtle" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((vehicle) => (
            <tr key={vehicle.id}>
              <th scope="row">{vehicle.id}</th>
              <td>{vehicle.image}</td>
              <td>{vehicle.licenseNumber}</td>
              <td>{vehicle.entryTime}</td>
              <td>{vehicle.parkedLocation}</td>
              <td>
                <button type="button" className="btn btn-info">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkedVehicles;
