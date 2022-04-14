//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

//NASA API key HgmrcOmFYLQYXNCV4PID3eFUggNnfP9f5UwZUUZb   from api.nasa.gov
//https://api.nasa.gov/planetary/apod?api_key=HgmrcOmFYLQYXNCV4PID3eFUggNnfP9f5UwZUUZb

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=HgmrcOmFYLQYXNCV4PID3eFUggNnfP9f5UwZUUZb&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.date
        document.querySelector('h3').innerText = data.explanation
        if (data['media_type'] === 'image')
        {
        document.querySelector('img').src = data.hdurl
        document.querySelector('img').style = 'display: block'
        document.querySelector('iframe').style = 'display: none'
        }
        else if (data['media_type'] === 'video')
        {
          document.querySelector('iframe').style = 'display: block'
          document.querySelector('img').style = 'display: none'
          document.querySelector('iframe').src = data.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

