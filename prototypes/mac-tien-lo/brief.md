# Mặc Tiên Lộ

## In your words
"Game tu tiên treo máy trên web, đột phá cảnh giới"

1. Thứ tăng dần: em chọn · 2. Bấm: em chọn · 3. Đột phá: em chọn · 4. Làm lại: em chọn · 5. Cảm giác: em chọn · 6. Hình: em chọn · 7. Mục tiêu: em chọn · 8. Lát cắt: em chọn

**Pitch:** Một kẻ phàm nhân ngồi thiền giữa núi mực, gom linh khí, mở các nguồn tu luyện và liều mình đột phá từng cảnh giới cho tới Phi Thăng.

**Genre:** tu tiên treo máy (idle incremental)

**Controls:** chỉ dùng chuột hoặc chạm: bấm "Thiền định", bấm mua nguồn tu luyện, bấm "Đột phá", bấm "Chuyển thế". Bàn phím: Space thiền định, B đột phá.

**Question:** Chuỗi "gom tu vi → liều đột phá → chuyển thế để tu nhanh hơn" có cuốn được người chơi trong khoảng một buổi không?

**Hooks:** Đột phá là một canh bạc. Chờ lâu hơn (tích thêm tu vi vượt ngưỡng) thì tỉ lệ thành công cao hơn, còn liều sớm thì có thể mất một phần tu vi. Mỗi lần thất bại để lại "Kinh nghiệm", giúp lần sau dễ hơn.

**Intent:** payoff builds *(provisional)*

## Look and references
- Look: tranh thủy mặc 2D. Nền là giấy cổ màu ngà, núi và mây vẽ bằng mực loang. Màu đỏ son dùng cho nút và con dấu, mực đen dùng cho chữ và hình. Hào quang quanh người tu đổi màu theo cảnh giới: trắng, lục, lam, vàng, tím. Mỗi nguồn tu luyện mua được sẽ hiện thành hình trong tranh, ví dụ một đóa sen, một lò đan hay một trận pháp. Mọi hình đều được vẽ, không dùng emoji hay hình tròn trơn. *(provisional)*
- References: các game idle kiểu Cookie Clicker (giá tăng dần, chuyển thế), tranh thủy mặc Trung Hoa (hình ảnh). *(guessed)*
- View: 2D · Camera: tĩnh. Bức tranh dần đầy lên theo những gì anh mua. *(provisional)*

## First minute
Màn hình hiện một người ngồi thiền trên tảng đá dưới chân núi. Bấm "Thiền định" thì có số linh khí bay lên. Khoảng 10 lần bấm là đủ mua "Thổ Nạp Quyết", và từ đó linh khí tự chảy về. Mua thêm vài nguồn, thanh tu vi đầy dần, rồi nút đỏ "Đột phá" sáng lên. Lần đột phá đầu tiên lên Luyện Khí tầng sau gần như chắc chắn thành công: hào quang bùng sáng, cả bức tranh đổi sắc, tốc độ tu luyện nhân lên *(guessed)*.

## Challenge
Từ khoảng phút thứ 5 đến 8 (Trúc Cơ, Kết Đan), tỉ lệ đột phá bắt đầu giảm. Thất bại mất khoảng 30% tu vi đã gom và gây "tâm ma", làm chậm tu luyện trong 30 giây. Bù lại, mỗi lần thất bại cộng tỉ lệ cho lần sau. Khoảng 15 đến 25 phút thì người chơi chạm tường lần đầu, và "Chuyển thế" mở ra *(provisional)*.

## Core loop
- Thiền định và mua nguồn tu luyện → linh khí mỗi giây tăng → tu vi đầy
- Đột phá (canh tỉ lệ) → thành công thì lên cảnh giới, nhân tốc độ tu luyện và mở nguồn mới · thất bại thì mất tu vi nhưng tỉ lệ lần sau tăng
- Bị kẹt → Chuyển thế, đổi kiếp này lấy Đạo tâm (bonus vĩnh viễn) → tu lại nhanh hơn

## Goal & fail state
- Thắng: đột phá Độ Kiếp rồi Phi Thăng (9 cảnh giới). Không có thua hẳn, chỉ có lùi lại vì thất bại khi đột phá. *(provisional)*

## Features
- [x] Thiền định bằng cách bấm, linh khí bay số
- [x] 6–8 nguồn tu luyện, giá tăng dần, mỗi nguồn hiện hình trong tranh
- [x] 9 cảnh giới, đột phá có tỉ lệ thành công, thất bại thì mất tu vi và bị tâm ma, lần sau tỉ lệ tăng
- [x] Mốc của từng nguồn (10/25/50 cái) nhân sản lượng, có hiệu ứng bùng sáng
- [x] Chuyển thế đổi lấy Đạo tâm, nhân mọi sản lượng, nút hiện trước số Đạo tâm sẽ nhận
- [x] Linh khí vẫn tăng khi đóng tab, quay lại thì báo đã vắng bao lâu và thu được bao nhiêu
- [x] Số lớn viết gọn (nghìn, triệu, tỉ...), số đếm lên mượt, tự lưu vào trình duyệt

## Your systems
- đột phá cảnh giới · in the slice

## Keep
-

## Avoid
- Tên, hình ảnh, nhân vật và giao diện của game Cửu Thiên (havek.ai)

## Out of scope
- Chuyển thế chồng nhiều tầng: add it as a feature
- Thành tựu: change it after play
- Nghiên cứu hoặc nâng cấp đổi luật chơi: grow it
- Sự kiện có thời hạn: change it after play
- Lưu đồng bộ nhiều thiết bị: needs a server
- Cân bằng cho nhiều ngày chơi: grow it

## Build order
1. Lát cắt: thiền định → nguồn tu luyện → 9 cảnh giới có đột phá may rủi → chuyển thế → Phi Thăng

---
**Kill condition:** nếu sau hai lần chỉnh, đột phá vẫn chỉ có cảm giác như "bấm nút chờ" chứ không giống một lựa chọn.

**Who it's for / what they feel:** người mê tiên hiệp, muốn treo máy nhẹ nhàng và có cảm giác "lên cấp" rõ rệt.

**Games you love / don't:** Cửu Thiên (havek.ai): thích thể loại tu tiên treo máy và đột phá cảnh giới.
