npm i

npm start

curl สำหรับ test ใน postman

1. สร้างรายการ To-Do ใหม่ (POST)
curl -X POST http://localhost:3000/api/todos \
-H "Content-Type: application/json" \
-d '{"title": "New Task"}'

2. ดึงรายการ To-Do ทั้งหมด (GET)
curl -X GET http://localhost:3000/api/todos

3. ดึงรายการ To-Do โดย ID (GET)
curl -X GET http://localhost:3000/api/todos/1

4. อัปเดตรายการ To-Do (PUT)
curl -X PUT http://localhost:3000/api/todos/1 \
-H "Content-Type: application/json" \
-d '{"title": "Updated Task", "completed": true}'

5. ลบรายการ To-Do (DELETE)
curl -X DELETE http://localhost:3000/api/todos/1