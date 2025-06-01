name: Chuc mung Quoc te Thieu nhi 1-6

on:
  workflow_dispatch:
    inputs:
      image_url:
        description: 'URL của ảnh chúc mừng'
        required: true
        default: 'https://example.com/happy-childrens-day.jpg'

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Update README with Children Day message
        run: |
          echo "# Chúc Mừng Ngày Quốc Tế Thiếu Nhi 1/6 🧸🎉" > README.md
          echo "" >> README.md
          echo "Chúc các bé gái và tất cả các bạn nhỏ một ngày 1/6 thật vui vẻ, tràn ngập tiếng cười và hạnh phúc!" >> README.md
          echo "" >> README.md
          echo "![Chúc mừng 1/6](${{ github.event.inputs.image_url }})" >> README.md
          echo "" >> README.md
          echo "_Hành động này được tạo tự động bởi GitHub Actions_" >> README.md

      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add README.md
          git commit -m "Cập nhật README chúc mừng Quốc tế Thiếu nhi 1/6"
          git push
