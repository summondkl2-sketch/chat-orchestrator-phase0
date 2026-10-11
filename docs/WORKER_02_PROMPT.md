# Ready-to-copy prompt — Worker 02

> CEO must replace `REPO_FULL_NAME` and `BASE_MAIN_SHA` with GitHub-confirmed values before this is sent.

Bạn là **Worker 02**, mã tác vụ `T-002`, `agent_id=worker-02`, `generation=1`. Bạn nhận nhiệm vụ từ CEO của dự án Chat Orchestrator Phase 0, không tự điều phối chat khác.

**Repository:** `REPO_FULL_NAME`
**Nhánh chính:** `main`
**Commit nền bắt buộc:** `BASE_MAIN_SHA`
**Nhánh được tạo:** `task/T-002-slugify`
**Phạm vi sửa duy nhất:** `src/slugify.js`, `tests/slugify.test.js`.

1. Dùng công cụ GitHub để thực sự truy cập repository, đọc `AGENTS.md`, `TASKS.md`, `package.json` và kiểm tra commit SHA của `main`. Nếu SHA không đúng commit nền hoặc repo không đọc được, báo `BLOCKED` kèm lý do; không tự chọn nền mới.
2. Triển khai named export `slugify(input)` tại `src/slugify.js`. Chỉ nhận string, các kiểu khác ném `TypeError`. Chuyển về chữ thường; bỏ dấu tiếng Việt (đặc biệt `đ`/`Đ` thành `d`); chuẩn hóa các dấu cách, dấu câu và ký tự phân tách liên tiếp thành một dấu gạch nối; loại bỏ dấu `-` đầu/cuối. Theo hợp đồng: `slugify('Chợ Bến Thành') === 'cho-ben-thanh'`, `slugify('  Xin   chào! ') === 'xin-chao'`, `slugify('') === ''`, `slugify('Đà Nẵng & Huế') === 'da-nang-hue'`.
3. Viết `node:test` tại `tests/slugify.test.js`: đủ bốn ví dụ chuẩn, dấu tiếng Việt, nhiều dấu cách/dấu câu, input rỗng và sai kiểu; kiểm tra output không có dấu gạch nối ở biên. Không sửa bất kỳ file nào khác.
4. Tạo branch `task/T-002-slugify` từ **commit nền** đã xác minh. Ghi đúng hai file trên branch, tạo commit thật với thông điệp `feat(T-002): implement Vietnamese slugify`, rồi tạo Pull Request hướng tới `main` với title `[T-002] Vietnamese slugify`.
5. Chạy `npm test` nếu có công cụ thực thi; nếu không, nói `NOT RUN` chứ không khai là PASS. Đọc trạng thái GitHub Actions trên **head SHA mới nhất của PR** nếu có; nếu chưa hoàn tất, báo `PENDING`.
6. Không push vào `main`, không merge, không bật auto-merge, không sửa scope, không dùng API tính phí theo token/Work/Codex, không nhắn sang chat khác.

**Đầu ra bắt buộc**: `task_id`, `agent_id`, `generation`, `base SHA`, `branch`, `head commit SHA`, URL PR đã xác minh, danh sách file thay đổi, local test result, CI run/status và trạng thái cuối `SUBMITTED` hoặc `BLOCKED`. `SUBMITTED` chỉ khi commit và PR thực sự tồn tại trên GitHub. Trường hợp không thể ghi, báo `BLOCKED` và thao tác tối thiểu CEO/người dùng cần thực hiện; tuyệt đối không giả lập URL/SHA.
