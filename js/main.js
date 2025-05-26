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
            tabElement.addEventListener('click', () => setActiveTab(tab));
            navTabs.appendChild(tabElement);
        });
    }

    function setActiveTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.textContent === tabName);
        });

        // Update panels visibility
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tabName.toLowerCase().replace(' & ', '-').replace(' ', '-')}-panel`);
        });

        // Filter and display services for the active tab
        const filteredServices = filterServicesByTab(tabName);
        const activePanel = document.querySelector(`#${tabName.toLowerCase().replace(' & ', '-').replace(' ', '-')}-panel`);
        if (activePanel) {
            activePanel.innerHTML = `
                <div class="services-grid">
                    ${filteredServices.map(service => createServiceCard(service)).join('')}
                </div>
            `;
        }
    }

    function filterServicesByTab(tab) {
        return SERVICES.filter(service => {
            switch(tab) {
                case 'Text':
                    return ['Text Generation', 'Ask to PDF', 'Document Analysis'].includes(service.title);
                case 'Code':
                    return ['Code Assistant'].includes(service.title);
                case 'Image & Video':
                    return ['Image Generation'].includes(service.title);
                case 'Legal Domain':
                    return ['Legal Assistant'].includes(service.title);
                case 'Chatbot':
                    return ['Chat Assistant'].includes(service.title);
                default:
                    return false;
            }
        });
    }

    // Initialize tab panels
    function initializeTabPanels() {
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        
        // Remove existing services grid
        if (servicesGrid) {
            servicesGrid.remove();
        }

        TABS.forEach(tab => {
            const panel = document.createElement('div');
            panel.id = `${tab.toLowerCase().replace(' & ', '-').replace(' ', '-')}-panel`;
            panel.className = `tab-panel ${tab === 'Text' ? 'active' : ''}`;
            tabContent.appendChild(panel);
        });
        
        dashboard.appendChild(tabContent);
        // Initialize first tab content
        setActiveTab('Text');
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
    initializeTabPanels();

    // Add click handlers for service cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.service-card')) {
            const card = e.target.closest('.service-card');
            const serviceTitle = card.querySelector('.service-title').textContent;
            const service = SERVICES.find(s => s.title === serviceTitle);
            showServiceDetail(service);
        }
    });
});
