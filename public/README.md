# Public Folder Structure

This folder contains your static assets that will be publicly accessible.

## Folder Structure

```
public/
├── images/
│   └── myphoto.jpg          (Place your photo here)
├── resume/
│   └── sujan_resume.pdf     (Place your resume here)
└── README.md
```

## How to Add Your Files

### 1. Add Your Photo
- Place your photo as `public/images/myphoto.jpg`
- This will be displayed on the About page
- Recommended size: 800x800px or similar square ratio

### 2. Add Your Resume
- Place your resume as `public/resume/sujan_resume.pdf`
- This will be downloadable from the Home page
- Make sure it's named exactly `sujan_resume.pdf`

## Important Notes

- Files in this folder will be copied to the root of your build directory
- Access them using `/images/myphoto.jpg` or `/resume/sujan_resume.pdf` in your code
- DO NOT include sensitive information in files here (they are publicly accessible)
