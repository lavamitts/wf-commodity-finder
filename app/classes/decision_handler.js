class DecisionHandler {
    constructor(req, res, screen) {
        this.req = req;
        this.screen = screen;

        switch (this.screen) {
            case "originate":
                if (this.req.session.data["origin"] == "gb") {
                    console.log("originate in gb")
                    res.redirect("/search")
                } else {
                    console.log("originate in row")
                    res.redirect("/country-picker")
                }
                break;
            case "country-picker":
                var country = req.session.data["country"]
                res.redirect("/search")
                break;
            case "search":
                var country = req.session.data["country"]
                res.redirect("/results-chapter")
                break;
            default:
            // to complete
        }

    }
}
module.exports = DecisionHandler