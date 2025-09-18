 // Fonction pour basculer l'affichage du dropdown au clic
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        
        // Ferme tous les autres dropdowns
        const allDropdowns = document.querySelectorAll('.dropdown-content');
        allDropdowns.forEach(item => {
            if (item !== dropdown) {
                item.style.display = 'none';
            }
        });

        // Bascule l'affichage du dropdown cliqué
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }

    // Ferme tous les dropdowns si on clique en dehors
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.relative')) {
            const allDropdowns = document.querySelectorAll('.dropdown-content');
            allDropdowns.forEach(item => item.style.display = 'none');
        }
    });