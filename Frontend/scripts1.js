//   -------------------------------------------------------
let localhost = "http://localhost:8080";
let deployUrl="https://busy-plum-cuttlefish-gear.cyclic.app"
let temp=0
function createUserRow(user) {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.gender}</td>
          <td>${user.city}</td>
          <td>${user.state}</td>
          <td>${user.country}</td>
          <td>${user.username}</td>
          <td>${user.dob_date}</td>
          <td>${user.dob_age}</td>
          <td>${user.phone}</td>
      `;
    return row;
  }
  window.onload = function () {
    fetchAndDisplayUsers();
  };
  
  // Function to fetch and display initial user data
  function fetchAndDisplayUsers() {
    fetch(`${deployUrl}/users-pagination`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const users = data;
        const tableBody = document.querySelector("tbody");
        users.forEach((user) => {
          const userRow = createUserRow(user);
          tableBody.appendChild(userRow);
        });
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }

//   filter
async function fetchData() {
    const gender = genderFilter.value;
    if(gender=="All"){
        
        fetch(`${deployUrl}/all-users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const users = data;
                const tableBody = document.querySelector('tbody');
                tableBody.innerHTML = "";
                users.forEach((user) => {
                    const userRow = createUserRow(user);
                    tableBody.appendChild(userRow);
                });
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }else{
        fetch(`${deployUrl}/users/filter?gender=${gender}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const users = data;
                const tableBody = document.querySelector('tbody');
                tableBody.innerHTML = "";
                users.forEach((user) => {
                    const userRow = createUserRow(user);
                    tableBody.appendChild(userRow);
                });
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }


    // Display the fetched data in the display area
}

// Add event listeners for pagination and gender selection
genderFilter.addEventListener('change', fetchData);


// next-prev-----------------------------------------------------------------

let page=1

const prevPageBtn = document.querySelector("#prevPageBtn");
const nextPageBtn = document.querySelector("#nextPageBtn");
prevPageBtn.addEventListener('click', () => {
    console.log("ok")
    if (page > 1) {
        page--;
        let pageN = page
        fetch(`${deployUrl}/users-pagination?page=${pageN}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const users = data;
                const tableBody = document.querySelector('tbody');
                tableBody.innerHTML = "";
                users.forEach((user) => {
                    const userRow = createUserRow(user);
                    tableBody.appendChild(userRow);
                });
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
    }
});


nextPageBtn.addEventListener('click', () => {
    
    
        page++;
        let pageN = page;
    fetch(`${deployUrl}/users-pagination?page=${pageN}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const users = data;
            const tableBody = document.querySelector('tbody');
            tableBody.innerHTML = "";
            users.forEach((user) => {
                const userRow = createUserRow(user);
                tableBody.appendChild(userRow);
            });
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
    
    
});