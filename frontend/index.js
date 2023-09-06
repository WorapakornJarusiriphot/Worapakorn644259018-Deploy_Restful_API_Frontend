const removeAllResult = () => {
  //เป็นฟังชั่นที่ใช้ในการ remove //ถ้าไม่มีก็จะไม่ลบของเก่าทิ้งก็จะเพิ่มขึ้นไปเรื่อยๆ
  const restaurantsElement = document.querySelector("#restaurants"); //สร้างตัวแปร ที่ชื่อว่า restaurantsElement //แล้วค้นหาใน #restaurants
  restaurantsElement.innerHTML = ""; //เป็นการเซตให้ข้างใน HTML เป็นค่าว่าง
};

const genRestaurantCard = (element) => {
  //const genRestaurantCard ก็คือ เป็นการสร้างฟังชั่นที่ชื่อว่า genRestaurantCard และ = (element) เป็นการรับร้านค้าเข้ามา //เป็นการส่งเข้าไปโชว์ผลลัพท์ใน index.html ของโค้ด <div class="row"> <div class="restaurants"> </div> เพราะในโซนผลลัพท์ยังไม่มีอะไรเลย
  const item = document.createElement("div"); //const item เป็นการสร้าง card ขึ้นมา //document.createElement("div") เป็นฟังค์ชั่นที่ใช้ในการสร้าง Element ขึ้นมา โดยมีแท๊กคือ div
  item.className = "card"; //item.className เป็นการใส่className ให้หน่อย เป็น card
  item.style = "max-width:20rem"; //item.style เป็นการใส่style ให้หน่อย เป็น max-width:20rem //max-width:20rem คือความกว้างสูงสุดที่20
  const card = `<img class="card-img-top"
  src="${element.imageURL}"
  alt="restaurant cover" />
  <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.type}</p>
      <a href="delete.html?id=${element.id}" class="btn btn-danger col-xs-2"> Delete </a>
      <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2" > Edit </a>
  </div>`;
  //const card เป็นการใส่ว่าใน card เนี่ยจะให้มันมีข้อมูลอะไรอยู่ในนั้นบ้าง // `` ที่ใช้เครื่องหมายหรือสัญลักษร์นี้เพราะเราแทรกทั้งตัวโค้ด html และโค้ด JavaScript เข้าไปด้วยกัน
  //<img class="card-img-top" src="${element.imageURL}" alt="restaurant cover" /> ก็คือ เป็นรูปภาพโดย classนั้นเป็น "card-img-top" //"card-img-top" เป็นของ bootstrap
  //src="${element.imageURL}" ก็คือในส่วนของรูปภาพ นั้นคือได้มาจากimageURL  //${} ก็คือเป็นการแทรกตัวแปร //ออฟเจ็คที่ส่งมาก็คือ element.imageURL
  //alt="restaurant cover" มีไว้เพื่อเวลาที่มีรูปใหญ่หรือ error ขึ้นมาภาพจะไม่โชว์ แต่อยากให้คนรูปว่ารูปภาพนี้เป็นรูปภาพเกี่ยวกับอะไรมันก็จะขึ้นคำอธิบายรูป กรณีที่โหลดรูปไม่สำเร็จ เช่นเน็ตช้า //"restaurant cover" คือคำที่ขึ้นเมื่อเกิดการ error
  /*<div class="card-body"> //เป็นข้อความโดยมี class เป็น card-body
      <h5 class="card-title">${element.name}</h5> //ก็คือใน card-body จะแทรก title และแทรกตัวแปรคือ element.name  //${} ก็คือเป็นการแทรกตัวแปร 
      <p class="card-text">${element.type}</p> //เป็นการแทนตัวหนังสือตัวเล็กๆเข้าไป //ก็คือใน card-body จะแทรก title และแทรกตัวแปรคือ element.name  //${} ก็คือเป็นการแทรกตัวแปร 
      <a href="" class="btn btn-danger col-xs-2" onclick="deleteRestaurant(${element.id})"> Delete </a> //เป็นการเพิ่มปุ่ม Delete
      <a href="edit.html?id=${element.id}" class="btn btn-warning col-xs-2" > Edit </a></div> //เป็นการเพิ่มปุ่ม Edit
  */

  item.innerHTML = card; //item.innerHTML ก็คือ item ถูกเซ็ดค่าโดย innerHTML ซึ่งเป็นแอดทีบิ้ว หรือพูดง่ายๆก็คือทุกอย่างใน card จะถูกเก็บไว้ในแอดทีบิว innerHTML
  const restaurantsElement = document.querySelector("#restaurants"); //สร้างตัวแปร ที่ชื่อว่า restaurantsElement //แล้วค้นหาใน #restaurants
  restaurantsElement.appendChild(item); //ใช้เวลาเซตค่า //appendChild คือเป็นการเพิ่ม โนดลู่ เข้าไป
};

const onLoad = async () => {
  const allRestaurants = await fetch("http://localhost:5000/restaurants", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
  console.log(allRestaurants);
  allRestaurants.forEach((restaurant) => genRestaurantCard(restaurant));
};

const searchRestaurant = async (event) => {
  //const searchRestaurant ก็คือ เป็นการสร้างฟังชั่นที่ชื่อว่า searchRestaurant //เป็นฟังชั่นevent //async ต้องมี await ด้วย
  // รับค่าจากช่อง input
  const keyword = document.getElementById("searchInput").value;
  //const keyword = event.target.value; //const keyword เป็นการลองรับตัวแปรที่ชื่อว่า keyword ซึ่งอยู่ในออฟเจ็ค event แล้วใน event มี target แล้วใน target มีแอดทีบิ้วชื่อว่า value
  // if(keyword != "" && event.key === "Enter"){ // if เป็นเงื่อนไข // เงื่อนไขแรกที่ใช้ในการ search คือ keyword != "" หมายถึง keywordหรือการพิมต้องไม่ว่างเปล่าถ้าว่างเปล่าก็จะไม่ไม่ค้นหา แล้ว && ก็คือ "และ" // เงื่อนไขที่สองที่ใช้ในการ search คือ event.key ต้องกดปุ่ม Enter ก่อน ไม่งั้นไม่ค้นหา //คือถ้าทำทั้ง เงื่อนไขที่แรก และ เงื่อนไขที่สอง ถึงจะทำงาน

  if (keyword != "") {
    //Getting Data from Restful API
    //http://localhost:5000/restaurants
    const url = "http://localhost:5000/restaurants"; //เป็นการไปดึงข้อมูลมาจาก http://localhost:5000/restaurants // url เป็นการดึงข้อมูล
    const allRestaurants = await fetch(url, {
      // เป็นการสร้างตัวแปรขึ้นมาเก็บใน allRestaurants ซึ่งคอยเก็บข้อมูล //fetch เป็น api และเป็นฟังชั่น ที่ใช้เรียกดูข้อมูลทั้งหมด และต้องใช้คู่กับ await เพื่อ"บอกว่าให้รอฟังชั่น fetch นี่ทำงานเสร็จก่อนแล้วค่อยทำบรรทัดถัดไป" //await ต้องมี async ด้วย //url คือตัวแทนที่มาจากโค้ด const url = "http://localhost:5000/restaurants";
      method: "GET", //เป็นการระบุว่า method นี้เป็น method อะไร //GET เป็นmethodที่เข้าถึงข้อมูลหรือdatabase //method คือวิธีการเข้าถึง ซึ่งประกอบไปด้วย GET POST PUT DELETE ซึ่งเลือกตามสถานการณ์
      mode: "cors", //เป็นการระบุว่า mode นี้เป็น mode อะไร //มันมีการข้ามเลยเรียกใช้ cors
      cache: "no-cache", //เป็นการระบุว่า cache นี้เป็น cache อะไร //no-cache ก็คือ ไม่ต้องเก็บ ไม่ต้องจับ เดี๋ยวหาเองทุกรอบ
      credentials: "same-origin", //เป็นการระบุว่า credentials นี้เป็น credentials อะไร
      headers: {
        //เป็นการระบุว่า headers นี้เป็น headers อะไร  //headersเพื่อบอกว่าข้อมูลที่เรากำลังจะคุยต่อไปนี้เนี่ย เราจะคุยด้วยเนื้อหาประเภศไหน
        "Content-Type": "application/json", //เป็น application/json เพราะ เซิฟเวอร์ของเราเป็นjson
      },
    }).then((response) => response.json()); //then ก็คือ สิ่งที่ต้องทำหลังจากนี้ // (response)=>response.json() ก็คือ ให้แปลงผลลัพท์เป็น json หรือออฟเจ็ค ให้หน่อย เพื่อเราจะได้ใช้งานได้ง่ายๆ
    console.log(allRestaurants); //พิมแค่ log อย่างเดียว ก็จะขึ้น console.log();  เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา
    //Find matching response
    let restaurants = allRestaurants.filter(
      //เป็นวิธี search โดยการเรียกออฟเจ็คที่ชื่อว่า filter
      (restaurantParameter) =>
        restaurantParameter.name.includes(keyword) ||
        restaurantParameter.type.includes(keyword) //เป็นงั้นไขของ filter // => ก็คือที่ //restaurantParameter.name.includes(keyword) ก็คือ เป็นงั้นไขคือเอา restaurantParameter ที่ restaurantParameter เทียบหรือหาในตัวของ name ใน database.js ของแบบฝึกหัดที่ 3 part 2 และ includes(keyword) ก็คือ มีคำใดคำนึงที่ตรงกับ keyword ของเราหรือป่าว // || คือ หรือ หมายถึง ถ้าตรงแค่อันเดียวก็เอา ถ้าตรงทั้งสองอันก็เอา        //restaurantParameter.type.includes(keyword) ก็คือ เป็นงั้นไขคือเอา restaurantParameter ที่ restaurantParameter เทียบหรือหาในตัวของ type ใน database.js ของแบบฝึกหัดที่ 3 part 2 และ includes(keyword) ก็คือ มีคำใดคำนึงที่ตรงกับ keyword ของเราหรือป่าว
    );
    console.log(restaurants); //พิมแค่ log อย่างเดียว ก็จะขึ้น console.log();  เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา //console.log คือคำสั่งแสดงข้อมูลจากภาษา JavaScript ออกสู่หน้า console หรือ ผลลัพท์
    //add restaurants to ID คือแอดตัวใหม่ลบตัวเก่า
    removeAllResult(); //เป็นการอัพเดจหน้าวิว
    restaurants.forEach((element) => {
      //forEach ก็คืออาเรย์เรา เราไม่ต้องสนใจนับจำนวนเอง ตัวฟังชั่นจะนับให้เรา มันจะวนลูปตามจำนวนสมาชิกที่อยู่ในอาเรย์นั้น เช่น มีสมาชิกที่ search อยู่ 1 ตัว มันก็จะทำให้แค่ 1 หรือเวลาเรา search แล้วเจอผลลัพท์หลายล้าน มันก็จะวนตามจำนวนหลายล้านที่เจอหรือตรงตาม keyword ซึ่งใช้ได้กับอาเรย์เท่านั้น  //เป็นการวนลูป //element เป็นอาเรย์ //พิมแค่ restaurants.forEach ก็จะขึ้น restaurants.forEach(element => {}); เพื่อที่เราจะได้ไม่ต้องพิมเต็มๆเพื่อจะได้ไม่เสียเวลา
      genRestaurantCard(element); //genRestaurantCard ฟังชั่นที่รับมาจาก element หรือ element ส่งมาให้ //genRestaurantCard(element) ก็คือ genRestaurantCard ส่ง element กลับไป //เป็นการส่งอีกฟังชั่นนึงเพื่อใช้ในการเพิ่มผลลัพท์ในหน้าเว็บให้หน่อย
    });
  }
};
const main = () => {
  //เป็นฟังชั่นที่ใช้ควบคุมที่เป็นเกณท์หลัก เป็นฟังชั่น main
  // const searchElement = document.querySelector(".search"); //เป็นการประกาศ Element และ document.querySelector เป็นการเข้าถึง Element ซึ่งอยู่ใน DOM ซึ่งเป็นออฟเจ็คตัวใหญ่ที่คุมทั้งหน้าเว็บแล้วเป็นการเข้าถึงสิ่งที่เราใช้   และ (".search") เป็นclass ที่เอามาจาก index.html อยู่ตรงโค้ด <input type="text" class="search" placeholder="Search Restaurant">
  //searchElement.addEventListener("keydown", searchRestaurant); //เป็นการผูกอีเว้นให้มันว่าเมื่อใดก็ตามถ้ามีคนพิมให้มันทำอะไรกับงาน //เป็นการเรียกออฟเจ็คชื่อ searchElement และ addEventListener เป็นการเพิ่มEventให้หน่อยสิ แล้วมี Event ก็คือ keydown หมายถึง สิ่งที่เรากดลงไปบนคีบอดหรือการพิม และมีฟังชั่นที่ใช้ในการค้นหาหรือเมื่อeventที่เกิดขึ้นให้เรียกใช้ฟังชั่นที่ชื่อว่า searchRestaurant

  onLoad();

  const searchElement = document.querySelector("#searchButton"); //เป็นการประกาศ Element และ document.querySelector เป็นการเข้าถึง Element ซึ่งอยู่ใน DOM ซึ่งเป็นออฟเจ็คตัวใหญ่ที่คุมทั้งหน้าเว็บแล้วเป็นการเข้าถึงสิ่งที่เราใช้   และ (".search") เป็นclass ที่เอามาจาก index.html อยู่ตรงโค้ด <input type="text" class="search" placeholder="Search Restaurant">
  searchElement.addEventListener("click", searchRestaurant); //เป็นการผูกอีเว้นให้มันว่าเมื่อใดก็ตามถ้ามีคนพิมให้มันทำอะไรกับงาน //เป็นการเรียกออฟเจ็คชื่อ searchElement และ addEventListener เป็นการเพิ่มEventให้หน่อยสิ แล้วมี Event ก็คือ keydown หมายถึง สิ่งที่เรากดลงไปบนคีบอดหรือการพิม และมีฟังชั่นที่ใช้ในการค้นหาหรือเมื่อeventที่เกิดขึ้นให้เรียกใช้ฟังชั่นที่ชื่อว่า searchRestaurant

  //document.getElementById('searchButton').addEventListener('click', searchRestaurant);
};

//เรียกใช้งาน function main
main(); //เรียกใช้งาน function main เพื่อเวลาเราเรียกใช้งานจะได้เรียกใช้ function main ก่อนใครเพื่อนเลย
