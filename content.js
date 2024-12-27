// Attendre que la page soit complètement chargée
window.addEventListener('load', () => {
    // Sélectionner tous les sondages disponibles dans la section appropriée
    const studies = document.querySelectorAll('#available .studies-section .row.gap-3');

    studies.forEach((study) => {
        try {
            // Récupération du temps et des points
            const timeText = study.querySelector('.column-time').innerText.trim(); // Exemple : "20′"
            const pointsText = study.querySelector('.column-points span:nth-child(2)').innerText.trim(); // Exemple : "160"

            // Extraction des valeurs numériques
            const time = parseInt(timeText.replace(/[^\d]/g, ''), 10); // Supprime les caractères non numériques
            const points = parseInt(pointsText, 10);

            if (time && points) {
                // Calcul du ratio
                const ratio = (points / time).toFixed(2); // Points par minute

                // Affichage du ratio sur la carte
                const ratioElement = document.createElement('div');
                ratioElement.className = 'ratio-display';
                ratioElement.innerText = `Ratio: ${ratio} pts/min`;
                study.appendChild(ratioElement);
            }
        } catch (err) {
            console.error("Erreur lors de l'analyse du sondage :", err);
        }
    });
});
