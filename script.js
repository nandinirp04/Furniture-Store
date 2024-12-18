document.getElementById('view-more-btn').addEventListener('click', function () {
    // Get the 'Why Choose Us' and 'Owner Info' sections
    const whyChooseUsSection = document.getElementById('why-choose-us');
    const ownerInfoSection = document.getElementById('owner-info');

    // Toggle the visibility of the sections
    const isHidden = whyChooseUsSection.style.display === 'none';
    whyChooseUsSection.style.display = isHidden ? 'block' : 'none';
    ownerInfoSection.style.display = isHidden ? 'block' : 'none';
    this.textContent = isHidden ? 'Read Less...' : 'Read More...'; // Change button text
});




