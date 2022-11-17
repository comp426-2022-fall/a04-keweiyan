#!/usr/bin/env node

// Dependencies
import { roll } from "./lib/roll.js"
import minimist from 'minimist'
import express from 'express'

const args = minimist(process.argv.slice(2))

const port = args.port ? args.port: 5000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check endpoint at /app/
app.get('/app/', (req, res, next) => {
    res.status(200).send("200 OK")
})

// Endpoint /app/roll/
app.get('/app/roll/', (req, res, next) => {
    res.json(roll(6, 2, 1))
})

app.post("/app/roll/", (req, res, next) => {
    const sides = parseInt(req.body.sides)
    const dice = parseInt(req.body.dice)
    const rolls = parseInt(req.body.rolls)
    res.status(200).json(roll(sides,dice,rolls))
});

// Endpoint /app/roll/:sides/
app.get('/app/roll/:sides/', (req, res, next) => {
    const sides =  parseInt(req.params.sides)
    res.status(200).json(roll(sides, 2,1))
})

// Endpoint /app/roll/:sides/:dice/
app.get('/app/roll/:sides/:dices', (req, res, next) => {
    const sides =  parseInt(req.params.sides)
    const dices =  parseInt(req.params.dices)
    res.status(200).json(roll(sides, dices,1))
})

// Endpoint /app/roll/:sides/:dice/:rolls/
app.get('/app/roll/:sides/:dices/:rolls', (req, res, next) => {
    const sides =  parseInt(req.params.sides)
    const dices =  parseInt(req.params.dices)
    const rolls = parseInt(req.params.rolls)
    res.status(200).json(roll(sides, dices, rolls))
})

// Default API endpoint
app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND")
})

app.listen(port)

