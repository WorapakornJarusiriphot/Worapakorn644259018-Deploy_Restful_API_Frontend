const init = async () => {
  // รับพารามิเตอร์จาก URL
  const params = new URL(document.location).searchParams;
  const id = params.get("id");
  if (id) {
    // รับร้านอาหารตาม ID
    try {
      const url = "http://localhost:5000/restaurants/";
      //console.log(url+id);
      const restaurant = await fetch(url + id, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
      //console.log(restaurant);
      document.getElementById("name").value = restaurant.name;
      document.getElementById("type").value = restaurant.type;
      document.getElementById("imageURL").value = restaurant.imageURL;
    } catch (error) {
      alert(`ไม่พบรหัสร้านอาหาร ${id} ร้านนี้`);
    }
  } else {
    alert("รหัสร้านอาหารหายไป");
  }
};

const edit = async () => {
  const id = document.getElementById("id").value;
  if (id) {
    //Update data
    const params = {
      id: id,
      name: document.getElementById("name").value,
      type: document.getElementById("type").value,
      imageURL: document.getElementById("imageURL").value,
    };
    try {
      const url = "http://localhost:5000/restaurants/";
      //console.log(url+id);
      const restaurant = await fetch(url + id, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((response) => response.json())
        .then(() => {
          alert(`อัพเดท ID ร้านอาหาร ร้านที่ ${id} แล้ว!`);
        });
    } catch (error) {
      console(error);
    }
  } else {
    alert("Restaurant ID is empty");
  }
};
