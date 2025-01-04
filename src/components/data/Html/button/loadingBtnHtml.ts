export const loadingBtnHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Loading Button</title>
</head>
<body>
  <button class="loading-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="loader-icon"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke-width="4"
        stroke="#000"
        stroke-dasharray="31.4"
        stroke-dashoffset="0"
      ></circle>
    </svg>
    <span>Loading...</span>
  </button>
</body>
</html>
`;
