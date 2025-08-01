function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  const selected = document.getElementById(tabId);
  if (selected) {
    selected.classList.add('active');
  }
}
