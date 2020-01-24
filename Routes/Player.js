let express = require("express");
let router = express.Router();
let Player = require("../Schema/Player");
let jwt = require("../jwthelper/jwthelper");
router.use(express.json());
router.get("/", (req, res) => {
    // console.log(jwt.sign({id:'123'},"auth"))
    res.send({ msg: "this is player" });
});
router.get("/display", async (req, res) => {
    try {
        let player = await Player.find({});
        let data = [];
        let cnt = 0;
        for (let i of player) {
            data[cnt++] = {
                name: i.name,
                dob: i.dob,
                role: i.role,
                style: i.style,
                team: i.team
            }
        }
        console.log("data=", data)
        res.json(data);
    } catch (error) {
        res.send("error occurred while fetching data" + error)
        console.log("error occurred while fetching data" + error);
    }
});
router.get("/team/:name", async (req, res) => {
    try {
        let player = await Player.find({ team: req.params.name });
        res.json(player);
    } catch (error) {
        res.send("error occurred while fetching data" + error)
        console.log("error occurred while fetching data" + error);
    }
});

router.post("/save", (req, res) => {
    console.log(req.body);
    let player = new Player(req.body);
    player.save()
        .then((data) => {
            res.status(201).send({ name: data.name, role: data.role, style: data.style });
        })
        .catch((error) => {
            res.send("error occurred while storing data" + error)
            console.log("error occurred while storing data" + error);
        });
})
module.exports = router;