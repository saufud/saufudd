document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const toggleDiv = document.getElementById('toggleDiv');
    
    toggleButton.addEventListener('click', function() {
        // Cek apakah elemen sudah memiliki kelas 'show'
        if (toggleDiv.classList.contains('show')) {
            // Jika ya, hapus kelas 'show'
            toggleDiv.classList.remove('show');
        } else {
            // Jika tidak, tambahkan kelas 'show'
            toggleDiv.classList.add('show');
        }
    });
});

// pindah halaman
function showContent(sectionId) {
    var contents = document.querySelectorAll('.about-active');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

showContent('about');


