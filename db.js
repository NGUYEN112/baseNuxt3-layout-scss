import { createConnection } from 'mysql2';

const connection = createConnection({
  host: 'localhost', // Địa chỉ máy chủ cơ sở dữ liệu
  user: 'username',   // Tên người dùng cơ sở dữ liệu
  password: 'password', // Mật khẩu cơ sở dữ liệu
  database: 'database_name', // Tên cơ sở dữ liệu
});

export default connection;
