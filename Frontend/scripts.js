// Function to fetch users and store in the database
let localhost = "http://localhost:8080";
let deployUrl="https://busy-plum-cuttlefish-gear.cyclic.app"
// Get references to the DOM elements
const fetchUsersBtn = document.getElementById("fetchUsersBtn");
const deleteUsersBtn = document.getElementById("deleteUsersBtn");
const userDetailsBtn = document.getElementById("userDetailsBtn");
const currentPage = document.getElementById("currentPage");
const genderFilter = document.getElementById("genderFilter");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const tableContainer = document.querySelector(".table-container");
const prevPageBtn = document.querySelector(".prev-page");
const nextPageBtn = document.querySelector(".next-page");

// Add click event listeners to the buttons
fetchUsersBtn.addEventListener("click", fetchUsers);
deleteUsersBtn.addEventListener("click", deleteUsers);
userDetailsBtn.addEventListener("click", navigateToUserDetails);
prevPageBtn.addEventListener("click", () => handlePagination("prev"));
nextPageBtn.addEventListener("click", () => handlePagination("next"));
applyFilterBtn.addEventListener("click", handleFilter);

async function fetchUsers() {
  try {
    // Disable the button to prevent multiple simultaneous requests
    fetchUsersBtn.disabled = true;

    // Make the API call to fetch users from the backend
    const response = await fetch(`${deployUrl}/fetch-get-users`);
    const data = await response.json();

    // Display success message or error alert based on the response
    if (response.ok) {
      alert(`${data.length} users fetched and stored in the database.`);
    } else {
      throw new Error("Error fetching and storing users.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    // Re-enable the button after the API call is complete
    fetchUsersBtn.disabled = false;
  }
}

// Function to delete all users from the database
async function deleteUsers() {
  try {
    // Ask for confirmation before proceeding with the deletion
    const confirmation = confirm("Are you sure you want to delete all users?");
    if (!confirmation) return;

    // Disable the button to prevent multiple simultaneous requests
    deleteUsersBtn.disabled = true;

    // Make the API call to delete all users from the backend
    const response = await fetch(`${deployUrl}/delete-table-data`, {
      method: "DELETE",
    });

    // Display success message or error alert based on the response
    if (response.ok) {
      alert("All users deleted from the database.");
    } else {
      throw new Error("Error deleting users from the database.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    // Re-enable the button after the API call is complete
    deleteUsersBtn.disabled = false;
  }
}

// Function to navigate to the User Details page
function navigateToUserDetails() {
  // Redirect the user to the user-details.html page
  window.location.href = "user-details.html";
}


