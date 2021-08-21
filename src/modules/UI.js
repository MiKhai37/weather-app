export default function displayUI() {
  const mainContainer = document.createElement('div');
  mainContainer.id = 'main';
  const title = document.createElement('h1');
  title.textContent = 'Weather App';

  const tempDiv = document.createElement('div');
  tempDiv.id ='temp';
  const minTempDiv = document.createElement('div');
  minTempDiv.id ='min-temp';
  const maxTempDiv = document.createElement('div');
  maxTempDiv.id = 'max-temp';

  const convertBtn = document.createElement('btn');
  convertBtn.classList.add('btn');
  convertBtn.id = 'conv-btn';
  convertBtn.textContent = 'C°/F°';

  const form = document.createElement('form');
  form.id = 'city-form'
  const label = document.createElement('label');
  label.textContent = 'City:';
  const input = document.createElement('input');

  form.appendChild(label);
  form.appendChild(input)

  mainContainer.appendChild(title);
  mainContainer.appendChild(minTempDiv);
  mainContainer.appendChild(tempDiv);
  mainContainer.appendChild(maxTempDiv);
  mainContainer.appendChild(convertBtn);
  mainContainer.appendChild(form);

  document.body.appendChild(mainContainer);
}