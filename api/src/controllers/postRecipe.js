const { Recipe, Diet } = require ('../db');

const postRecipe = async (req, res) => {
    let {
        name,
        summary,
        spoonacularScore,
        healthScore,
        instructions,
        createdInDb,
        diets
        
    } = req.body

     
    try {
         let newRecipe = await Recipe.create({
            name,
            summary,
            spoonacularScore,
            healthScore,
            instructions,
            createdInDb
        });
      let dietDb = await Diet.findAll({
            where: { name: diets },
        })
        newRecipe.addDiet(dietDb)
        res.send('Recipe created Succssesfully') 
    }catch(err) {
        console.log(err)

    }
}



module.exports = postRecipe