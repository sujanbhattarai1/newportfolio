# How to Add Your Image and Resume

## Quick Start

After extracting the portfolio, you need to add 2 files:

### 1. Your Photo (for About page)

**Location:** `public/images/myphoto.jpg`

**Steps:**
1. Go to the `public/images/` folder
2. Add your photo and rename it to exactly: `myphoto.jpg`
3. Recommended size: 800x800px or any square ratio

**Supported formats:** .jpg, .jpeg, .png (but rename to .jpg)

---

### 2. Your Resume (for download button)

**Location:** `public/resume/sujan_resume.pdf`

**Steps:**
1. Go to the `public/resume/` folder
2. Add your resume PDF and rename it to exactly: `sujan_resume.pdf`

**Must be:** PDF format

---

## File Structure

```
portfolio-redesign/
├── public/
│   ├── images/
│   │   └── myphoto.jpg          ← ADD YOUR PHOTO HERE
│   ├── resume/
│   │   └── sujan_resume.pdf     ← ADD YOUR RESUME HERE
│   └── README.md
├── src/
├── server/
└── ...
```

## After Adding Files

1. Make sure filenames are EXACT (case-sensitive)
2. Restart the dev server if it's running:
   ```bash
   # Stop the server (Ctrl+C)
   # Start again
   npm run dev
   ```

3. Your photo should appear on the About page
4. Resume should be downloadable from Home page

## Troubleshooting

**Photo not showing?**
- Check the filename is exactly `myphoto.jpg` (lowercase)
- Check it's in `public/images/` folder
- Clear browser cache and refresh

**Resume not downloading?**
- Check the filename is exactly `sujan_resume.pdf` (lowercase)
- Check it's in `public/resume/` folder
- Make sure it's a valid PDF file

**Still having issues?**
- Open browser console (F12) to see any errors
- Check file permissions (should be readable)
- Make sure you're accessing from http://localhost:5173

---

Need more help? Check the main README.md file!
