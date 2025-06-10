<script>
  function showTheory(sectionId) {
    // Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');

    // Tampilkan tab yang diklik
    const target = document.getElementById(sectionId);
    if (target) {
      target.style.display = 'block';
    }

    // Atur tampilan tombol tab agar yang aktif terlihat
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active-tab'));

    const activeButton = document.querySelector(`.tab-button[onclick="showTheory('${sectionId}')"]`);
    if (activeButton) {
      activeButton.classList.add('active-tab');
    }
  }

  // Tampilkan default tab saat halaman dimuat (opsional)
  document.addEventListener('DOMContentLoaded', function () {
    showTheory('astrometri'); // Atur tab pertama sebagai default
  });
</script>

body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background: #f4f9ff;
    color: #222;
}

h1, h2, h3 {
    color: #004080;
}

button {
    background-color: #007acc;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px 5px 20px 0;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #005a9e;
}

section {
    background: white;
    padding: 15px 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
}

