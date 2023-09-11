exports.get404 = (req, res) => {
    res.status(404).render("404", {
        docTitle: "Not Found",
        path: '/404',
    });
}