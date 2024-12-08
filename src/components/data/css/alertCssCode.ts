export const alertCssCode = `/* Basic reset for margin and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styles */
body {
  font-family: Arial, sans-serif;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Button Styles */
button {
  padding: 10px;
  background-color: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

.modal-overlay.show {
  visibility: visible;
  opacity: 1;
}

/* Modal Content Styles */
.modal-content {
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}

.modal-content.show {
  transform: scale(1.1);
}

/* Modal Text and Button Styles */
h1 {
  margin-bottom: 10px;
  font-size: 18px;
}

p {
  margin-bottom: 20px;
  font-size: 14px;
  color: #ccc;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.modal-buttons button {
  width: 48%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #555;
}

.modal-buttons button:first-child {
  background-color: #555;
  color: white;
}

.modal-buttons button:first-child:hover {
  background-color: #666;
}

.modal-buttons button:last-child {
  background-color: #f0f0f0;
  color: #333;
}

.modal-buttons button:last-child:hover {
  background-color: #e0e0e0;
}`;
