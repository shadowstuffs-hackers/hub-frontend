// Services helper functions
function createServiceCard(service) {
    return `
        <div class="service-card">
            <div class="service-icon">
                <span class="material-icons">${service.icon}</span>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `;
}

function createServiceDetailView(service) {
    return `
        <div class="service-detail">
            <button class="back-button">
                <span class="material-icons">arrow_back</span>
                Back to Dashboard
            </button>
            <div class="service-header">
                <span class="material-icons service-detail-icon">${service.icon}</span>
                <h2>${service.title}</h2>
            </div>
            <p class="service-detail-description">${service.description}</p>
            <div class="service-content">
                <div class="input-section">
                    <textarea placeholder="Enter your prompt here..." rows="4"></textarea>
                    <button class="submit-button">
                        <span class="material-icons">send</span>
                        Generate
                    </button>
                </div>
                <div class="output-section">
                    <div class="output-placeholder">
                        Your result will appear here...
                    </div>
                </div>
            </div>
        </div>
    `;
}
