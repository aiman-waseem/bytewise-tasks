

//npm install next react react-dom then add some scripts in package.json file
// npm run build----> npm run start

export default function Home(props) {
  return (
    <div>
      <h2>Welcome to our homepage.</h2>
      <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
      <p>The weather: {props.forecast}</p>
    </div>
  )
}
// If you dont want cached data use getServerSideprops
//This is gonna be server side and truly be dynamic. Its not happening on client side its happening on server side(nodejs). Its is slow and not ideal approach to use
export async function getServerSideProps() {
  const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
  const data = await response.json()

 

  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast  //periods[0] for getting today weather
    }
  }
}