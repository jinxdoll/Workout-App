const db = require('../models');
const router = require('express').Router();

//Method for getting workouts from the api. 
router.get("/api/workouts", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
      
        console.log("Here are the workouts:" + dbWorkout);
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(event => {
                total += event.duration;
            });
            workout.totalDuration = total;

        });

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});
// Method for adding a exercise from the workouts api using the workout id.
router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });

});