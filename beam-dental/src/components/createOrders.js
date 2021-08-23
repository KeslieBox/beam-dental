

    

    export const createOrders = (users) => {
        let orders, totalBrushes, starterBoxes, refillBoxes
        let [greenBrushes, pinkBrushes, blueBrushes] = [0, 0, 0]
        // let orders, totalBrushes, starterBoxes, refillBoxes
        users.map(user => {
            if (user.brush_color === "green") {
                greenBrushes+=1
            } else if (user.brush_color === "pink") {
                pinkBrushes++
            } else {
                blueBrushes++
            }
        })
        
        orders = {blue: blueBrushes, green: greenBrushes, pink: pinkBrushes} 
        // totalBrushes represents one brush per user aka totalUsers
        totalBrushes = blueBrushes + greenBrushes + pinkBrushes      
        // starter box order = one brush per user and one replacement head per user
        starterBoxes = Math.ceil((totalBrushes * 2) / 4)
        refillBoxes = Math.ceil(totalBrushes / 4)
      }