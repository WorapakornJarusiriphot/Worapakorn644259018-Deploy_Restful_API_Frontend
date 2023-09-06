# Worapakorn644259018-Frontend_Restaurant
 ชื่อ นายวรปกร จารุศิริพจน์ รหัสนักศึกษา644259018 หมู่เรียน64/45


# ในโฟลเดอร์ frontend


<img src="https://drive.google.com/uc?id=1fGuUTGDX_Q-I4y6ACkO6EOgq38gdgwp-" width=100%>

<img src="https://drive.google.com/uc?id=1y_C4GLlad-4u9a38O0MgEevvovwRAtl_" width=100%>

<img src="https://drive.google.com/uc?id=1iHpe29sUzyjkaQstQPx2U9D1j9SwtXS3" width=100%>

<img src="https://drive.google.com/uc?id=1XzsSLa5KqBk5vTnhsnOABYK68FTq8Th3" width=100%>

<img src="https://drive.google.com/uc?id=1_VWZwmyup9Z9rpXtyKZHKmc1ZOz7XYrR" width=100%>

<img src="https://drive.google.com/uc?id=100Ya6B6GScudu6MkRpHHzWvaOpofvkgs" width=100%>

<img src="https://drive.google.com/uc?id=1Rc_zin-CuxWubvM2BatRox2Pj2B4Eg3k" width=100%>

<img src="https://drive.google.com/uc?id=172GxxqLmxVQ03om8PZobQsOaKj7CfnXr" width=100%>

<img src="https://drive.google.com/uc?id=1RIyeD4667SL0dhl_s3E-7XsgeHq2TK6S" width=100%>


## ไฟล์ index.html

- ส่วนหัว (`<head>`):
- `<!DOCTYPE html>`: ประกาศว่าเป็น HTML5
- `<html lang="th">`: กำหนดภาษาของเอกสารเป็นไทย
- `<meta charset="UTF-8">`: กำหนดรูปแบบการเข้ารหัสเป็น UTF-8
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: กำหนดขนาด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ
- `<title>My Restaurant</title>`: กำหนดชื่อเรื่องของเว็บเพจเป็น "My Restaurant"

การเชื่อมต่อไลบรารีและแบบอักษร:

- **Bootstrap**: เชื่อมต่อ Bootstrap สำหรับการจัดรูปแบบ

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

---

- **Google Font**: เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

---

- **ไฟล์ CSS ท้องถิ่น**: เชื่อมต่อกับไฟล์ CSS ที่อยู่ในโปรเจ็ค

```html
<link href="./index.css" rel="stylesheet">
```

---

ส่วนของเนื้อหา (`<body>`):

- **Navigation Bar**: สร้าง Navigation Bar ด้วย Bootstrap

```html
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">My Restaurant</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="add.html">Add Restaurant</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

- **หัวข้อและส่วนค้นหา**: ประกอบด้วยหัวข้อ `"My Restaurant"` และส่วนของค้นหาร้านอาหาร

```html
<div class="container text-center">
  <h1>My Restaurant</h1>
  <div id="main" class="row">
    <div class="container text-center">
      <div class="input-group mb-3">
        <input class="form-control" id="searchInput" placeholder="Search Restaurant" type="text" style="width: 80%; font-size: 1.5rem; height: 50px;">
        <button class="btn btn-primary" id="searchButton" type="button">Search</button>
        <a class="btn btn-success mb-3 add-restaurant-button" href="add.html">Add Restaurant</a>
      </div>
      <div id="restaurants" class="row"></div>
    </div>
  </div>
</div>
```

---

- **การเชื่อมต่อไฟล์ JavaScript**: สุดท้ายของ <body>, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

```html
<script src="./index.js"></script>
```

---


# ไฟล์ index.js

## 1. Function removeAllResult

```html
const removeAllResult = () => {
  const restaurantsElement = document.querySelector("#restaurants");
  restaurantsElement.innerHTML = "";
};
```

---

- `const removeAllResult`: ประกาศฟังก์ชัน removeAllResult ที่ไม่มีพารามิเตอร์
- `document.querySelector("#restaurants")`: ค้นหา element ที่มี id ว่า "restaurants" ใน HTML
- `restaurantsElement.innerHTML = ""`: กำหนดค่าใน element นั้นเป็นสตริงว่าง เพื่อลบข้อมูลในส่วนนั้น

## 2. Function genRestaurantCard

```html
const genRestaurantCard = (element) => {
  const item = document.createElement("div");
  item.className = "card";
  item.style = "max-width:20rem";
  const card = `<img class="card-img-top" src="${element.imageURL}" alt="restaurant cover" />
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.type}</p>
                  <a href="delete.html?id=${element.id}" class="btn btn-danger col-xs-2"> Delete </a>
                  <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2"> Edit </a>
                </div>`;
  item.innerHTML = card;
  return item;
};
```

---

- `const genRestaurantCard = (element)`: ประกาศฟังก์ชัน genRestaurantCard ที่รับพารามิเตอร์ element
- `document.createElement("div")`: สร้าง element ประเภท "div"
- `item.className = "card"`: กำหนดคลาสของ element นั้นเป็น "card"
- `item.style = "max-width:20rem"`: กำหนดสไตล์ของ element นั้น จำกัดความกว้างสูงสุดที่ 20 rem
- `const card = <img ...> ... </div>;`: สร้างสตริง HTML ที่ประกอบด้วยรูปภาพ, ชื่อร้าน, ประเภทร้าน และลิงก์สำหรับแก้ไขและลบ
- `item.innerHTML = card`: ใส่สตริง HTML ที่สร้างไว้ลงใน element "div"
- `return item`: ส่งกลับ element ที่สร้างขึ้น

## 3. Function main

```html
const genRestaurantCard = (element) => {
  const item = document.createElement("div");
  item.className = "card";
  item.style = "max-width:20rem";
  const card = `<img class="card-img-top" src="${element.imageURL}" alt="restaurant cover" />
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.type}</p>
                  <a href="delete.html?id=${element.id}" class="btn btn-danger col-xs-2"> Delete </a>
                  <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2"> Edit </a>
                </div>`;
  item.innerHTML = card;
  return item;
};
```

---

- `const main = () =>`: ประกาศฟังก์ชัน main ที่ไม่มีพารามิเตอร์
- `onLoad()`: เรียกฟังก์ชัน onLoad (ไม่ได้ประกาศในโค้ดที่แสดง)
- `document.querySelector("#searchButton")`: ค้นหา element ที่มี id ว่า "searchButton" ใน HTML
- `searchElement.addEventListener("click", searchRestaurant)`: เพิ่ม event listener สำหรับปุ่มค้นหา เมื่อคลิก จะเรียกฟังก์ชัน searchRestaurant

## 4. เรียกใช้งาน Function main

```html
main();
```

---

- `main()`: เรียกใช้ฟังก์ชัน main เมื่อโหลดเว็บเพจเสร็จสิ้น


# ไฟล์ index.css

## 1. กำหนดรูปแบบสำหรับ Body

```html
body {
  background-color: #f8f9fa;
  font-family: 'K2D', sans-serif;
}
```

---

- `background-color: #f8f9fa;`: กำหนดสีพื้นหลังของเว็บเพจ
- `font-family: 'K2D', sans-serif;`: กำหนดแบบอักษรที่ใช้ในเว็บเพจ

## 2. กำหนดรูปแบบสำหรับ Header

```html
.header {
  font-family: 'Kanit', sans-serif;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
```

---

- `font-family: 'Kanit', sans-serif;`: กำหนดแบบอักษรที่ใช้สำหรับส่วนหัว (Header)
- `margin-top: 3rem;`: กำหนดระยะห่างจากด้านบนของส่วนหัว
- `margin-bottom: 2rem;`: กำหนดระยะห่างจากด้านล่างของส่วนหัว

## 3. กำหนดรูปแบบสำหรับ Card

```html
.card {
  margin-bottom: 1rem;
}
```

---

- `margin-bottom: 1rem;`: กำหนดระยะห่างจากด้านล่างของแต่ละ card

## 4. กำหนดรูปแบบสำหรับปุ่มค้นหา (Search Button)

```html
#searchButton {
  margin-top: 1rem;
}
```

---

- `margin-top: 1rem;`: กำหนดระยะห่างจากด้านบนของปุ่มค้นหา

## 5. กำหนดรูปแบบสำหรับส่วนแสดงผลของร้านอาหาร

```html
#restaurants {
  margin-top: 2rem;
}
```

---

- `margin-top: 2rem;`: กำหนดระยะห่างจากด้านบนของส่วนที่แสดงร้านอาหาร



# ไฟล์ add.html

## 1. ประกาศประเภทของเอกสาร (DOCTYPE)

```html
<!DOCTYPE html>
```

---

- บอกว่าเป็น HTML5

## 2. เริ่มต้นโค้ด HTML และกำหนดภาษาเป็นไทย

```html
<html lang="th">
```

---

## 3. ส่วนหัว (Head Section)
### 3.1 กำหนดรูปแบบการเข้ารหัสและ viewport

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

- กำหนดให้ใช้รูปแบบการเข้ารหัส UTF-8
- กำหนด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ

### 3.2 กำหนดชื่อเรื่อง

```html
<title>Add Restaurant</title>
```

---

- กำหนดชื่อเรื่องเป็น "Add Restaurant"

### 3.3 เชื่อมต่อ Bootstrap

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

---

- เชื่อมต่อไลบรารี Bootstrap สำหรับการจัดรูปแบบและสคริปต์

### 3.4 เชื่อมต่อ Google Font

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

---

- เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

### 3.5 เชื่อมต่อไฟล์ CSS ท้องถิ่น

```html
<link href="./add.css" rel="stylesheet">
```

---

- เชื่อมต่อกับไฟล์ CSS ท้องถิ่นในโปรเจ็ค

## 4. ส่วนของเนื้อหา (Body Section):
### 4.1 Navigation Bar
- สร้าง Navigation Bar ด้วย Bootstrap สำหรับการนำทางไปยังหน้าต่างๆ
### 4.2 ส่วนของการเพิ่มร้านอาหาร
- สร้างตัวหัวข้อ "Add Restaurant"
- สร้างฟอร์มสำหรับการป้อนข้อมูลร้านอาหารใหม่ โดยมีฟิลด์สำหรับ:
    - ชื่อร้านอาหาร
    - ประเภทร้านอาหาร
    - URL รูปภาพร้านอาหาร
    - ปุ่ม "Add new Restaurant" ที่มีการเรียกฟังก์ชัน addResto ที่อยู่ในไฟล์ JavaScript
### 4.3 การเชื่อมต่อไฟล์ JavaScript

```html
<script src="add.js"></script>
```

---

- สุดท้ายของ <body>, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

## 5. ปิดแท็ก HTML

```html
</html>
```

---




# ไฟล์ add.js

ฟังก์ชัน `addResto` ทำหน้าที่ส่งข้อมูลร้านอาหารไปยัง API เพื่อเพิ่มร้านอาหารใหม่ โดยมีรายละเอียดดังนี้:

## 1. การอ่านค่าจากฟิลด์ต่างๆ ในฟอร์ม:

```javascript
const name = document.getElementById("name").value;
const type = document.getElementById("type").value;
const imageURL = document.getElementById("imageURL").value;
```
- อ่านค่าจากฟิลด์ที่มี id ว่า "name", "type", และ "imageURL" และเก็บไว้ในตัวแปร name, type, และ imageURL

## 2. ตรวจสอบว่ามีค่าทั้งสามตัวแปรหรือไม่:

```javascript
if (name && type && imageURL) {
```
- ตรวจสอบว่ามีค่าในทั้งสามตัวแปรหรือไม่

## 3. สร้าง object สำหรับส่งไปยัง API:

```javascript
const params = {
  name: name,
  type: type,
  imageURL: imageURL,
};
```
- สร้าง object ที่มีค่าจากฟอร์มสำหรับส่งไปยัง API

## 4. ส่งข้อมูลไปยัง API:

```javascript
try {
  const restaurant = await fetch("http://localhost:5000/restaurants", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
```
- เรียก API ผ่านทาง POST method ไปยัง URL "http://localhost:5000/restaurants"
- กำหนด headers และตัวแปรอื่นๆ ให้ตรงกับการเรียก API

## 5. จัดการการตอบสนองจาก API:

```javascript
.then((response) => {
  return response.json();
})
.then((restaurant) => {
  alert("สร้างรหัสร้านอาหารใหม่ร้านที่ " + restaurant.id + " เรียบร้อยแล้ว");
  window.location.href = "/add.html";
});
```
- แปลงการตอบสนองเป็น JSON และแสดงข้อความแจ้งเตือน
- นำทางไปยังหน้าเพิ่มร้านอาหาร

## 6. จัดการข้อผิดพลาด:

```javascript
} catch (error) {
  alert("เพิ่มร้านอาหารใหม่ไม่ได้", error);
  console.error(error);
  alert(error.message);
  window.location.href = "/";
}
```
- แสดงข้อความแจ้งเตือนเมื่อมีข้อผิดพลาด
- นำทางกลับไปที่หน้าหลัก

## 7. จัดการกรณีที่ไม่กรอกข้อมูลในฟอร์ม:

```javascript
} else {
  alert("ต้องกรอกทุกช่อง!!");
  window.location.href = "/";
}
```
- แสดงข้อความแจ้งเตือนหากไม่ได้กรอกข้อมูลในฟอร์ม
- นำทางกลับไปที่หน้าหลัก





# ไฟล์ add.css

ไฟล์ `add.css` จัดการรูปแบบและสไตล์ต่างๆ ของหน้าเว็บสำหรับเพิ่มร้านอาหาร รายละเอียดดังนี้:

## 1. กำหนดรูปแบบโดยรวม:

```css
* {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- กำหนดรูปแบบฟอนต์สำหรับทุกองค์ประกอบในเว็บ
- ตั้งค่าขอบและเส้นกรอบเป็น 0
- กำหนด `box-sizing` เป็น `border-box`

## 2. กำหนดรูปแบบของ body:

```css
body {
    font-family: 'K2D', sans-serif;
    background-color: #f5f5f5;
}
```
- กำหนดฟอนต์สำหรับ body
- ตั้งสีพื้นหลังเป็นสีเทาอ่อน

## 3. กำหนดรูปแบบของ navbar:

```css
.navbar {
    background-color: #ff5722;
}
.navbar-brand,
.nav-link {
    color: #ffffff !important;
}
```
- กำหนดสีพื้นหลังของ navbar
- ตั้งสีของตัวอักษรใน navbar

## 4. กำหนดขนาดฟอนต์ส่วนหัวของการ์ด:

```css
.card-header {
    font-size: 24px;
}
```
- กำหนดขนาดฟอนต์สำหรับหัวของการ์ด

## 5. กำหนดสีของหัวข้อ:

```css
h1 {
    color: #4caf50;
}
```
- กำหนดสีของหัวข้อ h1

## 6. กำหนดขนาดตัวอักษรของฉลาก:

```css
.container .form-label {
    font-size: 24px;
}
```
- กำหนดขนาดตัวอักษรสำหรับฉลากในฟอร์ม

## 7. กำหนดรูปแบบของปุ่มหลัก:

```css
.btn-primary {
    background-color: #4caf50;
    font-size: 18px;
    width: 100%;
}
```
- กำหนดสีพื้นหลังของปุ่มหลัก
- ตั้งขนาดฟอนต์และความกว้างของปุ่ม





# ไฟล์ delete.html

ไฟล์ `delete.html` จัดการหน้าเว็บสำหรับลบร้านอาหาร รายละเอียดดังนี้:

## 1. ส่วนหัว (Head):

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Restaurant</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
    <link href="./delete.css" rel="stylesheet">
</head>
```
- กำหนดชุดอักขระเป็น UTF-8
- ตั้งค่า viewport
- กำหนดชื่อหน้าเว็บ
- ใช้ Bootstrap และ Google Font
- เชื่อมโยงไฟล์ CSS ภายนอก

## 2. ส่วน Body:

### 2.1 แถบนำทาง (Navbar):

```html
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">My Restaurant</a>
        <!-- ... -->
    </div>
</nav>
```
- สร้างแถบนำทาง
- ตั้งชื่อ "My Restaurant"

### 2.2 ฟอร์มลบร้านอาหาร:

```html
<!-- ... -->
<form class="delete-form">
    <div class="form-group">
        <label for="restaurantID">Restaurant ID:</label>
        <input type="text" class="form-control" id="restaurantID" required>
    </div>
    <button type="submit" class="btn btn-danger">Delete Restaurant</button>
</form>
<!-- ... -->
```
- สร้างฟอร์มสำหรับลบร้านอาหาร
- มีฟิลด์รับรหัสร้านอาหาร

### 3. สคริปต์ JavaScript:

```html
<!-- ... -->
<script src="./delete.js"></script>
```
- เชื่อมโยงไฟล์ JavaScript





# ไฟล์ delete.js

## 1. การรับค่าพารามิเตอร์จาก URL:
```javascript
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
```
- `new URLSearchParams(window.location.search)`: สร้างอ็อบเจ็กต์ URLSearchParams จากสตริงของ URL ปัจจุบัน เพื่อจัดการกับพารามิเตอร์ใน URL
- `urlParams.get("id")`: เรียกค่าของพารามิเตอร์ id และจัดเก็บไว้ในตัวแปร id

## 2. การเรียกข้อมูลร้านอาหาร:
```javascript
fetch(`http://localhost:5000/restaurants/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const restaurantName = data.name;
    document.getElementById("restaurant-id").innerText = restaurantName;
  })
  .catch((error) => console.error("ข้อผิดพลาดในการเรียกร้านอาหาร:", error));
```
- `fetch(...)`: ส่งคำขอ GET ไปยัง URL ที่ระบุ
- `.then((response) => response.json())`: แปลงการตอบสนองเป็น JSON
- `(data) => {...}`: ใช้ข้อมูลที่ได้ เรียกชื่อร้านอาหารและแสดงในหน้าเว็บ
- `.catch(...)`: จัดการข้อผิดพลาด (ถ้ามี)

## 3. ฟังก์ชัน deleteRestaurant:
```javascript
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
```
- `async function deleteRestaurant() {...}`: ประกาศฟังก์ชันแบบอะซิงโครนัส
- `await fetch(...)`: ส่งคำขอ DELETE แบบอะซิงโครนัส
- `if (!response.ok) {...}`: ตรวจสอบว่าการตอบสนองเป็นสำเร็จหรือไม่
- `const restaurantData = await response.json();`: แปลงการตอบสนองเป็น JSON
- `alert(...)`: แสดงข้อความแจ้งเตือนการลบสำเร็จ
- `catch (error) {...}`: จัดการข้อผิดพลาด






# ไฟล์ delete.css

## 1. การตั้งค่าส่วนรวม:
```css
* {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
- ตั้งค่าตัวอักษรเป็น `Kanit` สำหรับทุกองค์ประกอบในเว็บ
- กำหนดระยะขอบและระยะห่างไปที่ 0
- ตั้งค่า `box-sizing` เป็น `border-box` ทำให้ความกว้างและความสูงรวมถึงพื้นที่ขอบและพื้นที่เส้นโค้ง

## 2. สไตล์สำหรับหัวข้อ:
```css
h1 {
    color: #f44336;
}
```
- ตั้งค่าสีของหัวข้อ `h1` เป็นสีแดง (`#f44336`)

## 3. สไตล์สำหรับแถบนำทาง:
```css
.navbar {
    background-color: #ff5722;
}

.navbar-brand,
.nav-link {
    color: #ffffff !important;
}
```
- ตั้งค่าสีพื้นหลังของคลาส `.navbar` เป็นสีส้ม (`#ff5722`)
- ตั้งค่าสีของตัวอักษรสำหรับ `.navbar-brand` และ `.nav-link` เป็นสีขาว (`#ffffff`) และใช้ `!important` เพื่อให้มั่นใจว่าจะมีการแทนที่สไตล์อื่นที่อาจมี

## 4. สไตล์สำหรับส่วนหัวของการ์ด:
```css
.card-header {
    font-size: 24px;
    /* เพิ่มขนาดฟอนต์ส่วนหัวของการ์ด */
}
```
- ตั้งค่าขนาดตัวอักษรสำหรับ `.card-header` เป็น `24px`

## 5. สไตล์สำหรับองค์ประกอบ `p` ใน `.container`:
```css
.container p {
    font-size: 28px;
    /* เพิ่มขนาดตัวอักษรขององค์ประกอบ p */
}
```
- ตั้งค่าขนาดตัวอักษรสำหรับองค์ประกอบ `p` ภายใน `.container` เป็น `28px`




# ไฟล์ edit.html

## ส่วนหัว (`<head>`):
- `<!DOCTYPE html>`: ประกาศว่าเป็น HTML5
- `<html lang="th">`: กำหนดภาษาของเอกสารเป็นไทย
- `<meta charset="UTF-8">`: กำหนดรูปแบบการเข้ารหัสเป็น UTF-8
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: กำหนดขนาด viewport ให้ทำงานได้ดีบนอุปกรณ์ต่างๆ
- `<title>Edit Restaurant</title>`: กำหนดชื่อเรื่องของเว็บเพจเป็น "Edit Restaurant"

## การเชื่อมต่อไลบรารีและแบบอักษร:
- **Bootstrap**: เชื่อมต่อ Bootstrap สำหรับการจัดรูปแบบ

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
```

- **Google Font**: เชื่อมต่อกับ Google Fonts สำหรับแบบอักษร K2D และ Kanit

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=K2D&amp;family=Kanit:ital,wght@1,900&amp;display=swap" rel="stylesheet">
```

- **ไฟล์ CSS ท้องถิ่น**: เชื่อมต่อกับไฟล์ CSS ที่อยู่ในโปรเจ็ค

```html
<link href="./edit.css" rel="stylesheet">
```

## ส่วนของเนื้อหา (`<body>`):
- **Navigation Bar**: สร้าง Navigation Bar ด้วย Bootstrap

```html
<nav class="navbar navbar-expand-lg navbar-light">
...
</nav>
```

- **แบบฟอร์มแก้ไขร้านอาหาร**: ประกอบด้วยช่องกรอกสำหรับแก้ไขชื่อร้าน, ประเภทร้าน, และ URL รูปร้านอาหาร

```html
<div class="container text-center">
...
</div>
```

- **การเชื่อมต่อไฟล์ JavaScript**: สุดท้ายของ `<body>`, มีการเชื่อมต่อกับไฟล์ JavaScript ท้องถิ่น

```html
<script src="edit.js"></script>
```




# ไฟล์ edit.js
## 1. การรับค่าพารามิเตอร์จาก URL
```javascript
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
```
- `new URLSearchParams(window.location.search)`: สร้างอ็อบเจ็กต์ URLSearchParams จากสตริงของ URL ปัจจุบัน เพื่อจัดการกับพารามิเตอร์ใน URL
- `urlParams.get("id")`: เรียกค่าของพารามิเตอร์ชื่อ "id" และจัดเก็บไว้ในตัวแปร `id`

## 2. การดึงข้อมูลร้านอาหาร
```javascript
fetch(`http://localhost:5000/restaurants/${id}`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("name").value = data.name;
    document.getElementById("type").value = data.type;
    document.getElementById("imageURL").value = data.imageURL;
  })
  .catch((error) => console.error("เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร:", error));
```
- `fetch(...)`: ส่งคำขอ GET ไปยัง URL ที่ระบุเพื่อดึงข้อมูลร้านอาหาร
- `.then((response) => response.json())`: แปลงการตอบสนองเป็น JSON
- `(data) => {...}`: ใช้ข้อมูลที่ได้ เรียกข้อมูลร้านอาหารและแสดงในฟอร์ม
- `.catch(...)` จัดการข้อผิดพลาด (ถ้ามี)

## 3. ฟังก์ชัน updateRestaurant
```javascript
async function updateRestaurant() {
  // อ่านค่าจากฟอร์ม
  // ตรวจสอบว่ามีค่าทั้งสามตัวแปรหรือไม่
  // สร้าง object สำหรับส่งไปยัง API
  // ส่งข้อมูลไปยัง API ด้วย method PUT
  // จัดการการตอบสนองจาก API
  // จัดการข้อผิดพลาด
  // จัดการกรณีที่ไม่กรอกข้อมูลในฟอร์ม
}
```
- `async function updateRestaurant() {...}`: ประกาศฟังก์ชันแบบอะซิงโครนัสที่ทำหน้าที่อัปเดตข้อมูลร้านอาหาร

## 4. การเพิ่ม Event Listener
```javascript
document
  .getElementById("updateButton")
  .addEventListener("click", updateRestaurant);
```
- `document.getElementById("updateButton")`: รับอ็อบเจ็กต์ของปุ่มที่มี ID ว่า "updateButton"
- `.addEventListener("click", updateRestaurant)`: เพิ่ม Event Listener ให้กับปุ่ม และเรียกฟังก์ชัน `updateRestaurant` เมื่อมีการคลิก





# ไฟล์ edit.css

ไฟล์นี้เป็นไฟล์ CSS สำหรับกำหนดรูปแบบของหน้าแก้ไขร้านอาหาร (edit.html) ในโปรเจ็คนี้ มาดูรายละเอียดของไฟล์นี้กัน:

```css
.container {
  margin-top: 50px;
}

.input-group {
  width: 80%;
  margin: auto;
}

.add-restaurant-button {
  margin-left: 10px;
}
```

- `.container`: กำหนด margin-top เป็น 50px สำหรับคลาส container เพื่อให้มีระยะห่างจากส่วนบนของหน้าเว็บ
- `.input-group`: กำหนดความกว้างของกลุ่มข้อมูลอินพุตเป็น 80% และจัดตำแหน่งอยู่ตรงกลางด้วยการกำหนด margin เป็น auto
- `.add-restaurant-button`: กำหนดระยะห่างทางด้านซ้ายของปุ่มเพิ่มร้านอาหารเป็น 10px

ไฟล์นี้ทำหน้าที่ปรับแต่งรูปแบบของหน้าแก้ไขร้านอาหารให้ดูสวยงามและง่ายต่อการใช้งาน

1. **.container**:
   - `margin-top: 50px;`: กำหนดระยะห่างจากส่วนบนของหน้าเว็บเป็น 50px เพื่อให้มีพื้นที่ว่างด้านบนของ container

2. **.input-group**:
   - `width: 80%;`: กำหนดความกว้างของกลุ่มอินพุต (input group) เป็น 80% ของความกว้างทั้งหมดของหน้าจอ
   - `margin: auto;`: กำหนด margin ให้เป็น auto เพื่อจัดตำแหน่งกลุ่มอินพุตอยู่ตรงกลางของหน้าจอ

3. **.add-restaurant-button**:
   - `margin-left: 10px;`: กำหนดระยะห่างทางด้านซ้ายของปุ่ม "เพิ่มร้านอาหาร" เป็น 10px เพื่อให้มีระยะห่างจากปุ่มอื่น ๆ