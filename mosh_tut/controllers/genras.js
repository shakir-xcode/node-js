const express = require('express');

const getAllGenra = (req, res, next) => {
    console.log('get All genras');
    res.send('get All genras');
    next()
}


const addGenra = (req, res, next) => {
    console.log('add genra');
    res.send('add genra');
    next()
}


const deleteGenra = (req, res, next) => {
    console.log('delete genra');
    res.send('delete genra ' + req.params.id);
    next()
}


module.exports = { getAllGenra, addGenra, deleteGenra };