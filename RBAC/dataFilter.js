const filterDataByRole = (data, role) => {
  switch (role) {
    case "Admin":
      return data; // Admin gets all data
    case "User":
      return data.filter((item) => item.public === true); // Filter public data
    case "Guest":
      return []; // No data for guests
    default:
      return [];
  }
};

module.exports = filterDataByRole;
