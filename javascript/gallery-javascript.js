let currentImageIndex = 0;
        const galleryImages = document.querySelectorAll('.gallery-img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.close');

        // Open lightbox on image click
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentImageIndex = index;
                openLightbox(img);
            });
        });

        function openLightbox(img) {
            const caption = img.nextElementSibling.textContent;
            lightboxImg.src = img.src;
            lightboxCaption.textContent = caption;
            lightbox.style.display = 'flex';
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
        }

        function changeImage(n) {
            currentImageIndex += n;
            if (currentImageIndex >= galleryImages.length) {
                currentImageIndex = 0;
            } else if (currentImageIndex < 0) {
                currentImageIndex = galleryImages.length - 1;
            }
            openLightbox(galleryImages[currentImageIndex]);
        }

        closeBtn.addEventListener('click', closeLightbox);

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowLeft') changeImage(-1);
                if (e.key === 'ArrowRight') changeImage(1);
                if (e.key === 'Escape') closeLightbox();
            }
        });