let isShown = false

export const createNotification = (message) => { 
    
    const notificationContainerElement = document.getElementById("notification-container");

    if (isShown) return
    
    notificationContainerElement.innerHTML = `
        <div class="toast align-items-center text-bg-body-tertiary text-black border-0" role="alert" aria-live="assertive" aria-atomic="true" style="max-width: max-content;">
            <div class="d-flex" style="padding: 0 15px;">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-black me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

    const toastEl = notificationContainerElement.querySelector('.toast');
    const toast = new bootstrap.Toast(toastEl, {delay: 2500});
    toast.show();
    isShown = true

    toastEl.addEventListener('hidden.bs.toast', () => {
        isShown = false;
        notificationContainerElement.innerHTML = "";
    });
}
