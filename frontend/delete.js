// delete.js
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fetching the restaurant data to get the name
fetch(`http://localhost:5000/restaurants/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const restaurantName = data.name;
    document.getElementById("restaurant-id").innerText = restaurantName;
  })
  .catch((error) => console.error("ข้อผิดพลาดในการเรียกร้านอาหาร:", error));

async function deleteRestaurant() {
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("ข้อผิดพลาดในการลบร้านอาหาร");
    }

    const restaurantData = await response.json();
    const restaurantName = restaurantData.name;

    alert(`คุณได้ทำการลบร้านอาหารร้านที่ ${id} ไปแล้ว`);
    window.location.href = "index.html";
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการลบร้านอาหาร:", error);
  }
}
