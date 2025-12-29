# How to Add Your Profile Photo

## Steps:

1. **Prepare your photo:**
   - Use a square photo (recommended: 400x400px or larger)
   - Good quality headshot or portrait
   - Save it as `profile-photo.png` in the same folder as `index.html`

2. **Supported formats:**
   - `.png` (currently configured)
   - `.jpg` or `.jpeg`
   - `.webp`

3. **File location:**
   ```
   Hema_profile/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── profile-photo.png  ← Your photo here
   ```

4. **If you want to use a different filename:**
   - Open `index.html`
   - Find the line: `<img src="profile-photo.png" ...`
   - Change `profile-photo.png` to your filename
   - Also update `styles.css` - find `background-image: url('profile-photo.png')` and change it

## Features Enabled:

✅ **3D Tilt Effect**: Move your mouse over the photo to see it tilt in 3D
✅ **Pixel Particle Effect**: When you scroll down, the photo breaks into pixels and falls down

## Note:
If no photo is found, a placeholder with initials "HS" will be displayed automatically.

