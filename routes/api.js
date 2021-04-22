const db = require('../models');
const router = require('express').Router();

//get workouts
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