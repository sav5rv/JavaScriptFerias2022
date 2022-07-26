const customName  = document.getElementById('customname');
const randomize   = document.querySelector('.randomize');
const story       = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

var storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';

var insertX = ['valor X 1',
               'valor X 2',
               'valor X 3'];

var insertY = ['the soup kitchen',
               'Disneyland',
               'the White House'];

var insertZ = ['spontaneously combusted',
               ' melted into a puddle on the sidewalk',
               ' turned into a slug and crawled away'];

randomize.addEventListener('click', result); //ouvinte de evento de clique à variável randomize para que, quando o botão que ele representa, for clicado, a função result() seja executada.

function result() {
    var newStory = storyText;
    //alert(newStory);
    
    var xItem = randomValueFromArray(insertX);
    newStory = newStory.replaceAll(':insertX:',xItem);
    
    var yItem = randomValueFromArray(insertY);
    newStory = newStory.replaceAll(':insertY:',yItem);
    
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(':insertZ:',zItem);

    if(customName.value !== '') {
      const name = customName.value;
      const updated = newStory.replace('Bob',name);
    }

    if(document.getElementById("uk").checked) {
      const weight = `${Math.round(300 * 0.0714286)} stone`;
      const temperature =  `${Math.round((94 - 32) * 5 / 9)} centigrade`;
    
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
