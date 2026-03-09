#1. Git
- Undo action
    + Cách undo commit message: git commit --amend -m”<message mới>”
    + Cách un-stage (Staging → Working Directory):
    Un-stage một file cụ thể: git restore --staged <file>
    Un-stage tất cả các file: git restore --staged . (lưu ý dấu chấm ở cuối)
    + Cách un-commit (Repository → Staging): git reset --soft HEAD~1
    + Cách un-commit (Repository → Working Directory): git reset HEAD~1
- Branching: là việc tạo ra một nhánh (branch) riêng để phát triển tính năng hoặc sửa lỗi mà không ảnh hưởng đến code chính.
- Lệnh kiểm tra trạng thái hiện tại của repository Git: git status
#2. JavaScript
- Câu điều kiện: if
**cú pháp**
if (<điều kiện>) {
// code...
}
- Vòng lặp: for (i)
**cú pháp**
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
