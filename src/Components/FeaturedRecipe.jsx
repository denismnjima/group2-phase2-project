import pasta from "../assets/pasta.jpg"
function FeaturedRecipe() {
  return (
    <div className="featuredRecipe">
      <img src={pasta}/>
      <div className="featured-recipe-content">
        <h1 id="pointer">featured recipe</h1>
        <h2> spaghetti with rustic bread</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo</p>
        <button className="featured-button">View Recipe</button>
      </div>

  </div>
  )
}

export default FeaturedRecipe