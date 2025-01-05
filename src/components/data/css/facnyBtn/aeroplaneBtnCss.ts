export const aeroplaneBtnCss = `.aeroplane-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 50%;
  background-color: #333;
  color: white;
  overflow: hidden;
}

.aeroplane-icon {
  position: absolute;
  width: 3rem;
  height: 3rem;
  transition: 0.2s;
  fill: white;
}

.aeroplane-btn:hover .aeroplane-icon {
  fill: black;
}

.aeroplane-hover {
  position: absolute;
  inset: 0;
  transition: 0.2s;
  transform: scale(0.5);
  border: 0.25rem solid white;
  border-radius: 50%;
  opacity: 0;
}

.aeroplane-btn:hover .aeroplane-hover {
  opacity: 1;
  transform: scale(1);
}
`;
