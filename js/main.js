document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.getElementById('navTabs');
    const servicesGrid = document.getElementById('servicesGrid');
    const dashboard = document.getElementById('dashboard');
    const serviceDetail = document.getElementById('serviceDetail');

    // Initialize tabs
    function initializeTabs() {
        TABS.forEach(tab => {
            const tabElement = document.createElement('div');
            tabElement.className = `nav-tab ${tab === 'Text' ? 'active' : ''}`;
            tabElement.textContent = tab;
            tabElement.addEventListener('click', () => setActiveTab(tabElement));
            navTabs.appendChild(tabElement);
        });
    }

    // Initialize services
    function initializeServices() {
        servicesGrid.innerHTML = SERVICES.map(service => createServiceCard(service)).join('');
        
        // Add click handlers to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                const serviceTitle = this.querySelector('.service-title').textContent;
                const service = SERVICES.find(s => s.title === serviceTitle);
                showServiceDetail(service);
            });
        });
    }

    function setActiveTab(tabElement) {
        document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
        tabElement.classList.add('active');
    }

    function showServiceDetail(service) {
        dashboard.style.display = 'none';
        serviceDetail.style.display = 'block';
        serviceDetail.innerHTML = createServiceDetailView(service);
        
        // Add back button handler
        document.querySelector('.back-button').addEventListener('click', () => {
            dashboard.style.display = 'block';
            serviceDetail.style.display = 'none';
        });
    }

    // Initialize the application
    initializeTabs();
    initializeServices();
});
