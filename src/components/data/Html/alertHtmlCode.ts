export const alertHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alert Dialog</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Main Content -->
  <div class="container">
    <button onclick="handleAlertDialog()">Show Alert</button>
  </div>

  <!-- Modal -->
  <div id="modal" class="modal-overlay">
    <div class="modal-content">
      <h1>Are you absolutely sure?</h1>
      <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
      <div class="modal-buttons">
        <button onclick="closeModal()">Cancel</button>
        <button onclick="handleContinue()">Continue</button>
      </div>
    </div>
  </div>

  <script>
    // Show the Modal
    function handleAlertDialog() {
      const modal = document.getElementById('modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.add('show');
      setTimeout(() => {
        modalContent.classList.add('show');
      }, 200); // Delay before modal animation starts
    }

    // Close the modal
    function closeModal() {
      const modal = document.getElementById('modal');
      const modalContent = document.querySelector('.modal-content');
      modal.classList.remove('show');
      setTimeout(() => {
        modalContent.classList.remove('show');
      }, 300); // Delay before modal disappears
    }

    // Handle the Continue action (e.g., delete account)
    function handleContinue() {
      console.log("Account deleted");
      closeModal();
    }
  </script>

</body>
</html>`;
