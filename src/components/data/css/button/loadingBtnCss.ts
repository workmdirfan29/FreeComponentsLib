export const loadingBtnCss = `@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

body {
    height: 100vh;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f5;
}

.loading-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #f3f3f3;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #2d3748;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.loading-button:hover {
  background-color: #e2e8f0;
}

.loader-icon {
  width: 20px;
  height: 20px;
  animation: spin 3s linear infinite;
  color: #000;
}
`;
