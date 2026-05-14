# CHANGELOG

All notable changes to this project will be documented in this file.

This project follows Semantic Versioning.

## [1.0.0] - 2025-10-05
### Added
- PDF download links to GetInvolved.html, NewsHub.html, and AboutUs.html
- Contact Info PDF button on AboutUs.html and NewsHub.html
- Dark pink background styling for content sections
- Responsive image styling with hover effects
- Button styling for PDF downloads

### Changed
- Fixed footer CSS syntax error in style.css
- Updated image paths to match exact filenames
- Replaced inline styles with CSS classes for consistency

### Fixed
- Images not displaying due to incorrect CSS folder path
- Text visibility on pink background
- Broken footer clip-path syntax

## Semantic Versioning

Format: MAJOR.MINOR.PATCH
Example: 2.1.3
- MAJOR → Breaking changes (1.0.0 → 2.0.0)
- MINOR → New features (1.0.0 → 1.1.0)
- PATCH → Bug fixes / small improvements (1.0.0 → 1.0.1)
## [1.1.0] - 2025-10-05
### Added
- JavaScript file JS/script.js with DOMContentLoaded handler
- Contact form validation on AboutUs.html
- Image lightbox feature on GetInvolved.html
- Dynamic PDF list generation on NewsHub.html
- CSS styling for form, lightbox, and PDF buttons

### Changed
- Replaced hardcoded PDF links in NewsHub.html with dynamic JS generation
- Added class="gallery-img" to images in GetInvolved.html

### Fixed
- Resolved console errors from missing script references