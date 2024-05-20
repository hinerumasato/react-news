# React News App

Ứng dụng ReactJS đọc báo sử dụng RSS.

## Giới thiệu

Ứng dụng này cho phép người dùng đọc các tin tức từ các nguồn RSS khác nhau. Nó được xây dựng bằng ReactJS và sử dụng các công nghệ sau:

- [React](https://reactjs.org/): Thư viện JavaScript để xây dựng giao diện người dùng.
- [RSS Parser](https://www.npmjs.com/package/rss-parser): Thư viện JavaScript để phân tích cú pháp và lấy dữ liệu từ các nguồn RSS.
- [Axios](https://axios-http.com/): Thư viện JavaScript để gửi các yêu cầu HTTP.

## Cài đặt

1. Clone repository này:

  ```bash
  git clone https://github.com/hinerumasato/react-news.git
  ```

2. Di chuyển vào thư mục của ứng dụng:

  ```bash
  cd react-news
  ```

3. Cài đặt các dependencies:

  ```bash
  npm install
  ```

4. Chạy ứng dụng:

  ```bash
  npm run dev
  ```

  Hoặc chạy ứng dụng dưới dạng Production

  ```bash
  npm run build
  npm run preview
  ```

5. Mở trình duyệt và truy cập vào địa chỉ [http://localhost:5173](http://localhost:5173) để xem ứng dụng.

## Sử dụng

Ứng dụng này cho phép người dùng đọc các tin tức từ các nguồn RSS khác nhau. Người dùng có thể:

- Xem danh sách các nguồn tin tức.
- Chọn một nguồn tin tức để xem danh sách các bài viết.
- Xem chi tiết một bài viết.

## Đóng góp

Nếu bạn muốn đóng góp vào dự án này, hãy làm theo các bước sau:

1. Fork repository này.
2. Tạo một branch mới:

  ```bash
  git checkout -b feature/your-feature-name
  ```

3. Commit các thay đổi của bạn:

  ```bash
  git commit -m "Add your feature"
  ```

4. Push branch của bạn lên repository của bạn:

  ```bash
  git push origin feature/your-feature-name
  ```

5. Tạo một pull request từ branch của bạn vào branch `main` của repository này.