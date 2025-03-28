document.getElementById('addSlide').addEventListener('click', addSlide);
document.getElementById('downloadSlides').addEventListener('click', downloadSlides);

function addSlide() {
    const slideContainer = document.createElement('div');
    slideContainer.className = 'slide';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Введите текст для слайда';

    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Удалить слайд';
    removeButton.style.display = 'block'; // Теперь кнопка отображается
    removeButton.addEventListener('click', () => {
        slideContainer.remove();
    });

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                let img = slideContainer.querySelector('img');
                if (!img) {
                    img = document.createElement('img');
                    slideContainer.appendChild(img);
                }
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    slideContainer.appendChild(textInput);
    slideContainer.appendChild(imageInput);
    slideContainer.appendChild(removeButton);
    document.getElementById('slidesContainer').appendChild(slideContainer);
}

async function downloadSlides() {
    const { jsPDF } = window.jspdf;
    const slides = document.getElementById('slidesContainer');
    const pdf = new jsPDF();

    const promises = Array.from(slides.children).map(async (slide, index) => {
        const text = slide.querySelector('input[type="text"]').value;
        const img = slide.querySelector('img');

        if (text) {
            pdf.text(text, 10, 10 + index * 50);
        }

        if (img) {
            const imgData = img.src;
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'JPEG', 10, 20 + index * 50, pdfWidth - 20, pdfHeight);
        }

        if (index < slides.children.length - 1) {
            pdf.addPage();
        }
    });

    await Promise.all(promises);

    pdf.save('presentation.pdf');
}